#!/usr/bin/env bash
set -eu

BASE_URL="https://www.volksgezondheidenzorg.info/sites/default/files/map/detail_data/klik_corona"
DEST_GPKG="data/corona_nl.gpkg"
DEST_CSV="data/corona.csv"
DEST_CSV_FIXED="data/corona_fix_gem_codes.csv"
DEST_CSVT_FIXED="data/corona_fix_gem_codes.csvt"

function get_url(){
    current_date=$(date +%d%m%Y)
    url="${BASE_URL}${current_date}.csv"
    status_code=$(curl -s -I -w "%{http_code}" "$url" -o /dev/null | tr '\r' '\n')
    if [[ $status_code == 200 ]];then
        echo "$url"
        return 0
    fi
    for x in $(seq 0 19); do
        echo "$x"
        url="${BASE_URL}${current_date}_${x}.csv"
        status_code=$(curl -s -I -w "%{http_code}" "$url" -o /dev/null | tr '\r' '\n')
        if [[ "$status_code" -eq 200 ]];then
            echo "$url"
            return 0
        fi
    done 
    echo ""
    return 1
}

function download() {
    csv_url=$(get_url)
    if [[ -z $csv_url ]];then
        echo "could not determine CSV url"
        exit 1
    fi
    echo "{\"date_data\": \"$(date +%d-%m-%Y)\",\"url\": \"$csv_url\"}" > webapp/updated.json
    curl "$csv_url" -o "$DEST_CSV"
    # mkdir -p data/src
    # curl https://geodata.nationaalgeoregister.nl/bestuurlijkegrenzen/extract/bestuurlijkegrenzen.zip -o data/src/bestuurlijkegrenzen.zip
    # unzip data/src/bestuurlijkegrenzen.zip -d data/src/
}

function fix_gem_codes(){
    local input_file
    local dest_file
    input_file="$DEST_CSV"
    dest_file="$DEST_CSV_FIXED"
    echo "id;Gemeente;Indicator;Aantal" > "$dest_file"
    while read -r line; do
        code=$(echo $line | awk -F';' '{printf($1)}' | xargs -0 printf "%04d\n")
        echo "$code;$(echo $line | awk -F';' '{printf($2)}');$(echo $line | awk -F';' '{printf($3)}');$(echo $line | awk -F';' '{printf($4)}')" >> "$dest_file"
    done< <(tail -n +2 data/corona.csv)
}

# call functions
download
fix_gem_codes

rm -f $DEST_GPKG
ogr2ogr -f GPKG "$DEST_GPKG" "data/src/Gemeentegrenzen.gml" Gemeenten -nln gemeenten
echo '"String","String","String","Integer"' > "$DEST_CSVT_FIXED"

ogr2ogr -append -f GPKG "$DEST_GPKG" "$DEST_CSV_FIXED" corona_fix_gem_codes -nln corona_stats
ogrinfo "$DEST_GPKG" -sql "update corona_stats set Aantal=0 where Aantal IS NULL"
ogr2ogr -append -f GPKG "$DEST_GPKG" "$DEST_GPKG" -sql "select gemeenten.*, corona_stats.Aantal as aantal from gemeenten left join corona_stats on gemeenten.Code = corona_stats.id" -nln gemeenten_corona


# duplicated features (foreach case 1 feature is required)
# quite inefficient...
while read -r CODE;do
    aantal=$(ogrinfo "$DEST_GPKG" -sql "select aantal from gemeenten_corona where Code = '$CODE'" | grep "aantal " | cut -d= -f2)
    for i in $(seq $aantal); do 
        ogr2ogr -update -append -unsetFid -f GPKG "$DEST_GPKG" "$DEST_GPKG" -sql "select centroid(geom), Gemeentenaam as gemeentenaam, Code as code from gemeenten_corona where Code = '$CODE'" -nln markers
    done
done< <(ogrinfo "$DEST_GPKG" -sql "select * from gemeenten_corona where aantal > 0" -geom=NO | grep "Code " | cut -d"=" -f2)

# export markers to csv
ogr2ogr -f GeoJSON "data/corona_markers.json" "$DEST_GPKG" -sql "select * from markers" -nln corona_markers -t_srs "EPSG:4326"
# proprces for simplified gemeenten
ogr2ogr -f GeoJSON "data/gemeenten.json" "$DEST_GPKG" gemeenten_corona -nln gemeenten -t_srs "EPSG:4326"
ndjson-cat "data/gemeenten.json"  | ndjson-split 'd.features' > data/gemeenten_ndjson.json
# create simplified gemeenten polygons
geo2topo -q 1e5 -n gemeenten_simplified=data/gemeenten_ndjson.json | toposimplify -s 0.00000001 -f  | topo2geo data/gemeenten_simplified.json
# create simplified gemeenten borders polylines (inside) [see https://medium.com/@mbostock/command-line-cartography-part-3-1158e4c55a1e]
geo2topo -q 1e5 -n gemeenten_borders_simplified=data/gemeenten_ndjson.json | toposimplify -s 0.00000001 -f | topomerge --mesh -f 'a !== b' gemeenten_borders_simplified=gemeenten_borders_simplified  | topo2geo data/gemeenten_borders_simplified.json 
# create simplified gemeenten borders polylines (outside)
geo2topo -q 1e5 -n gemeenten_borders_outside=data/gemeenten_ndjson.json | toposimplify -s 0.00000001 -f | topomerge --mesh -f 'a === b' gemeenten_borders_outside=gemeenten_borders_outside  | topo2geo data/gemeenten_borders_outside.json 

# copy assed to webapp/data
mkdir -p webapp/data
cp "data/corona_markers.json" webapp/data/
cp data/gemeenten_simplified.json webapp/data/
cp data/gemeenten_borders_simplified.json webapp/data/
cp data/gemeenten_borders_outside.json webapp/data/
