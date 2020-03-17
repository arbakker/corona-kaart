#!/usr/bin/env bash
set -eu

DEST_GPKG="../data/corona_nl.gpkg"
DEST_CSV="../data/corona.csv"
DEST_CSV_FIXED="../data/corona_fix_gem_codes.csv"
DEST_CSVT_FIXED="../data/corona_fix_gem_codes.csvt"

DATE_DATA=""
URL_DATA=""

COMMENT=""
UNKNOWN=0
mkdir -p ../data
mkdir -p ../webapp/data

function download() {
    URL_DATA="https://www.rivm.nl/coronavirus-kaart-van-nederland"
    curl -L "$URL_DATA" | pup '#csvData text{}' > "$DEST_CSV"
    sed -i "s/&#39;/'/" "$DEST_CSV"
    DATE_DATA=$(cat "$DEST_CSV" | grep peildatum | cut -d' ' -f2-4 | cut -d";" -f1)
    COMMENT=$(sed -n 4p ../data/corona.csv | cut -d";" -f 1)
    UNKNOWN=$(echo $COMMENT | grep -oP '[0-9]*' | head -n 1)
}

function fix_gem_codes(){
    local input_file
    local dest_file
    input_file="$DEST_CSV"
    dest_file="$DEST_CSV_FIXED"
    echo "gemeente;id;aantal;bev_aantal;aantal_100k" > "$dest_file"
    while read -r line; do
        code=$(echo $line | awk -F ';' '{printf($1)}' | xargs -0 printf "%04d\n")
        gem_naam=$(echo $line | awk -F ';' '{printf($2)}')
        aantal=$(echo $line | awk -F';' '{printf($3)}')
        bev_aantal=$(echo $line | awk -F';' '{printf($4)}')
        aantal_100k=$(echo $line | awk -F';' '{printf($5)}')
        echo "${gem_naam};${code};${aantal};${bev_aantal};${aantal_100k}" >> "$dest_file"
    done< <(tail -n +4 "$input_file")
}

# call functions
download
fix_gem_codes
rm -f $DEST_GPKG
rm -f "../data/gemeenten_points.json"

# variable
echo '"String","String","Integer","Integer","Integer"' > "$DEST_CSVT_FIXED"
ogr2ogr -f GeoJSON -lco "COORDINATE_PRECISION=6" -sql "select gemeenten_simplified.Gemeentenaam as gemeentenaam, corona_fix_gem_codes.aantal as aantal, corona_fix_gem_codes.bev_aantal as bev_aantal, corona_fix_gem_codes.aantal_100k as aantal_100k from gemeenten_simplified left join '../data/corona_fix_gem_codes.csv'.corona_fix_gem_codes on gemeenten_simplified.Code = corona_fix_gem_codes.id" ../data/gemeenten_simplified_joined.json ../data-src/gemeenten_simplified.json -nln gemeenten_simplified_joined

ogrinfo ../data/gemeenten_simplified_joined.json -dialect sqlite -sql "update gemeenten_simplified_joined set aantal=0 where aantal IS NULL"

ogr2ogr -f GeoJSON -lco "COORDINATE_PRECISION=6" "../data/gemeenten_points.json" ../data/gemeenten_simplified_joined.json -dialect SQLITE -sql "select centroid(Geometry) as geom, aantal, gemeentenaam from gemeenten_simplified_joined where aantal > 0" -nln gemeenten_points -nlt POINT -t_srs EPSG:4326
# renaming with nln does not work on geojson?
sed -i 's/gemeenten_simplified_joined/gemeenten_points/g' "../data/gemeenten_points.json"

TOTAL=$(ogrinfo "../data/gemeenten_points.json" -sql "select sum(aantal) as total from gemeenten_points"  | grep "total " | cut -d= -f 2)
MAX=$(ogrinfo "../data/gemeenten_points.json" -sql "select MAX(aantal) from gemeenten_points" | grep -e "MAX.*=" | cut -d= -f2)
MIN=$(ogrinfo "../data/gemeenten_points.json" -sql "select MIN(aantal) from gemeenten_points" | grep -e "MAX.*=" | cut -d= -f2)
echo "{\"date_data\": \"$DATE_DATA\",\"url\": \"$URL_DATA\", \"total_infections\":\"$(($TOTAL+$UNKNOWN))\", \"max\":\"$MAX\", \"min\":\"$MIN\", \"comment\":\"$COMMENT\"}" > ../webapp/updated.json

cp ../data/gemeenten_simplified_joined.json ../webapp/data/ 
cp ../data/gemeenten_points.json ../webapp/data/ 
python3 classify.py ../data/gemeenten_points.json 5 --layer gemeenten_points --attribute aantal > ../webapp/classes.json

cat ../webapp/classes.json
