#!/usr/bin/env bash
set -eu
DEST_CSV="../data/corona.csv"
DATE_DATA=""
mkdir -p "../data"

function download() {
    rm -f "$DEST_CSV"
    URL_DATA="https://www.rivm.nl/coronavirus-kaart-van-nederland"
    curl -sL "$URL_DATA" | pup '#csvData text{}' > "$DEST_CSV"
    sed -i "s/&#39;/'/" "$DEST_CSV"
    sed -i '/^$/d' "$DEST_CSV"
    sed -i 's/Aantal per 100.000 inwoners/Aant100k/g' "$DEST_CSV"
    DATE_DATA=$(curl -sL "$URL_DATA" | pup 'div .content.with-background > p json{}' | jq -r '.[0].text' | sed  -E 's/aantal per //g')
}

# call functions
download
rm -f "../data/gemeenten_points.json"
echo "{\"date_data\": \"$DATE_DATA\",}" > ../webapp/updated.json
cp "$DEST_CSV" "../webapp/$(basename $DEST_CSV)"