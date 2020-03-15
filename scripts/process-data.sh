#!/usr/bin/env bash

set -eu

BASE_URL="https://www.volksgezondheidenzorg.info/sites/default/files/map/detail_data/klik_corona"
DEST_GPKG="../data/corona_nl.gpkg"
DEST_CSV="../data/corona.csv"
DEST_CSV_FIXED="../data/corona_fix_gem_codes.csv"
DEST_CSVT_FIXED="../data/corona_fix_gem_codes.csvt"

DATE_DATA=""
URL_DATA=""
mkdir -p ../data

function download() {
    URL_DATA="https://www.rivm.nl/coronavirus-kaart-van-nederland"
    curl -s "$URL_DATA" | pup '#csvData text{}' > "$DEST_CSV"
    sed -i "s/&#39;/'/" "$DEST_CSV"
    DATE_DATA=$(cat "$DEST_CSV" | grep peildatum | cut -d' ' -f2-4 | cut -d";" -f1)
    mkdir -p ../data/src
    #curl https://geodata.nationaalgeoregister.nl/bestuurlijkegrenzen/extract/bestuurlijkegrenzen.zip -o ../data/src/bestuurlijkegrenzen.zip
    #unzip ../data/src/bestuurlijkegrenzen.zip -d ../data/src/
    # curl http://geodata.nationaalgeoregister.nl/cbsgebiedsindelingen/extract/cbsgebiedsindelingen2019_naarPDOK.zip -o ../data/src/cbsgebiedsindelingen2019_naarPDOK.zip
    # unzip ../data/src/cbsgebiedsindelingen2019_naarPDOK.zip -d ../data/src/

}

function fix_gem_codes(){
    local input_file
    local dest_file
    input_file="$DEST_CSV"
    dest_file="$DEST_CSV_FIXED"
    echo "Gemeente;id;Aantal" > "$dest_file"
    while read -r line; do
        code=$(echo $line | awk -F ';' '{printf($2)}' | xargs -0 printf "%04d\n")
        echo "$(echo $line | awk -F ';' '{printf($1)}');$code;$(echo $line | awk -F';' '{printf($3)}')" >> "$dest_file"
    done< <(tail -n +5 "$input_file")
}

# call functions
download
fix_gem_codes

rm -f $DEST_GPKG
ogr2ogr -f GPKG "$DEST_GPKG" "../data/src/Gemeentegrenzen.gml" Gemeenten -nln gemeenten
echo '"String","String","Integer"' > "$DEST_CSVT_FIXED"

ogr2ogr -append -f GPKG "$DEST_GPKG" "$DEST_CSV_FIXED" corona_fix_gem_codes -nln corona_stats
ogrinfo "$DEST_GPKG" -sql "update corona_stats set Aantal=0 where Aantal IS NULL"

ogr2ogr -append -f GPKG "$DEST_GPKG" "$DEST_GPKG" -sql "select gemeenten.*, corona_stats.Aantal as aantal from gemeenten left join corona_stats on gemeenten.Code = corona_stats.id" -nln gemeenten_corona
ogrinfo "$DEST_GPKG" -sql "update gemeenten_corona set aantal=0 where aantal IS NULL"

TOTAL=$(ogrinfo "$DEST_GPKG" -sql "select sum(aantal) as total from gemeenten_corona"  | grep "total " | cut -d= -f 2)
MAX=$(ogrinfo "$DEST_GPKG" -sql "select gemeentenaam, MAX(aantal) from gemeenten_corona" | grep -e "MAX.*=" | cut -d= -f2)
MIN=$(ogrinfo "$DEST_GPKG" -sql "select gemeentenaam, MIN(aantal) from gemeenten_corona" | grep -e "MAX.*=" | cut -d= -f2)

echo "{\"date_data\": \"$DATE_DATA\",\"url\": \"$URL_DATA\", \"total_infections\":\"$TOTAL\", \"max\":\"$MAX\", \"min\":\"$MIN\"}" > ../webapp/updated.json

# create new table marker, using sqlite3 because duplicating features in ogr2ogr is quite inefficient
sqlite3 "$DEST_GPKG" "CREATE TABLE markers (geom POINT,gemeentenaam TEXT,code TEXT);insert into gpkg_contents values('markers','features','markers','','2020-03-12T17:04:36.134Z',0,0,360,90,28992);insert into gpkg_geometry_columns values( 'markers', 'geom', 'POINT' , 28992, 0,0);"

SQL_SCRIPT="./script.sql"
echo "SELECT load_extension('mod_spatialite');" > $SQL_SCRIPT
while read -r CODE;do
    aantal=$(ogrinfo "$DEST_GPKG" -sql "select aantal from gemeenten_corona where Code = '$CODE'" | grep "aantal " | cut -d= -f2)    
    for i in $(seq $aantal); do
        # use AsGPB to cast geometry to gpkg geom
        echo "${SQL}INSERT INTO markers SELECT AsGPB(Centroid(GeomFromGPB(geom))), Gemeentenaam as gemeentenaam, Code as code from gemeenten_corona where Code = '$CODE';" $SQL_SCRIPT
    done
done< <(ogrinfo "$DEST_GPKG" -sql "select * from gemeenten_corona where aantal > 0" -geom=NO | grep "Code " | cut -d"=" -f2)
echo EXECUTING SQL
sqlite3 "$DEST_GPKG" < "$SQL_SCRIPT"

# export markers to JSON
ogr2ogr -f GeoJSON "../data/corona_markers.json" "$DEST_GPKG" -sql "select * from markers" -nln corona_markers -t_srs "EPSG:4326"
# export point to JSON
ogr2ogr -f GeoJSON "../data/gemeenten_simplified_point.json" "$DEST_GPKG"  -sql  "select centroid(geom) as geom, aantal, Gemeentenaam, Code from gemeenten_corona" -nlt POINT -t_srs EPSG:4326 -nln gemeenten_points

# ggd layer does not align exactly with the gemeenten
# ogr2ogr -f GeoJSON  "../data/ggd.json" ../data/src/cbsgebiedsindelingen2019_naarPDOK.gpkg cbs_ggdregio_2019_gegeneraliseerd  -nln ggd -t_srs "EPSG:4326"
# ndjson-cat "../data/ggd.json"  | ndjson-split 'd.features' > ../data/ggd_ndjson.json
# geo2topo -q 1e5 -n ggd_simplified=../data/ggd_ndjson.json | toposimplify -s 0.000000001 -f | topomerge --mesh -f 'a !== b' ggd_simplified=ggd_simplified  | topo2geo ../data/ggd_simplified.json 
# geo2topo -q 1e5 -n ggd_simplified_outside=../data/ggd_ndjson.json | toposimplify -s 0.000000001 -f | topomerge --mesh -f 'a === b' ggd_simplified_outside=ggd_simplified_outside  | topo2geo ../data/ggd_simplified_outside.json 

# proprces for simplified gemeenten
ogr2ogr -f GeoJSON "../data/gemeenten.json" "$DEST_GPKG" gemeenten_corona -nln gemeenten -t_srs "EPSG:4326"
ndjson-cat "../data/gemeenten.json"  | ndjson-split 'd.features' > ../data/gemeenten_ndjson.json
# create simplified gemeenten polygons
geo2topo -q 1e5 -n gemeenten_simplified=../data/gemeenten_ndjson.json | toposimplify -s 0.00000001 -f  | topo2geo ../data/gemeenten_simplified.json
# create simplified gemeenten borders polylines (inside) [see https://medium.com/@mbostock/command-line-cartography-part-3-1158e4c55a1e]
geo2topo -q 1e5 -n gemeenten_borders_simplified=../data/gemeenten_ndjson.json | toposimplify -s 0.00000001 -f | topomerge --mesh -f 'a !== b' gemeenten_borders_simplified=gemeenten_borders_simplified  | topo2geo ../data/gemeenten_borders_simplified.json 
# create simplified gemeenten borders polylines (outside)
geo2topo -q 1e5 -n gemeenten_borders_outside=../data/gemeenten_ndjson.json | toposimplify -s 0.00000001 -f | topomerge --mesh -f 'a === b' gemeenten_borders_outside=gemeenten_borders_outside  | topo2geo ../data/gemeenten_borders_outside.json 

# copy assed to webapp/data
mkdir -p ../webapp/data
cp ../data/corona_markers.json ../webapp/data/
cp ../data/gemeenten_simplified.json ../webapp/data/
#cp ../data/ggd_simplified.json ../webapp/data/
cp ../data/gemeenten_simplified_point.json ../webapp/data/
cp ../data/gemeenten_borders_simplified.json ../webapp/data/
cp ../data/gemeenten_borders_outside.json ../webapp/data/

python3 classify.py ../data/corona_nl.gpkg 5 --layer gemeenten_corona --attribute aantal > ../webapp/classes.json





