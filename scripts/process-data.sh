#!/usr/bin/env bash
set -eu
BASE_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" > /dev/null && pwd )"
DATA_DIR="$BASE_DIR/../data"
WEBAPP_DIR="$BASE_DIR/../webapp"
DEST_CSV="$DATA_DIR/corona.csv"
DATE_DATA=""

function download() {
    rm -f "$DEST_CSV"
    URL_DATA="https://www.rivm.nl/coronavirus-kaart-van-nederland"
    curl -sL "$URL_DATA" | pup '#csvData text{}' > "$DEST_CSV"
    sed -i "s/&#39;/'/" "$DEST_CSV"
    sed -i '/^$/d' "$DEST_CSV"
    sed -i 's/Aantal per 100.000 inwoners/Aant100k/g' "$DEST_CSV"
    DATE_DATA=$(curl -sL "$URL_DATA" | pup 'div .content.with-background > p json{}' | jq -r '.[0].text' | sed  -E 's/aantal per //g')
}

# main
mkdir -p "$DATA_DIR"
download
echo "{\"date_data\": \"$DATE_DATA\"}" > $DATA_DIR/updated.json
cp "$DATA_DIR/updated.json" "$WEBAPP_DIR/updated.json"
cp "$DEST_CSV" "$WEBAPP_DIR/$(basename $DEST_CSV)"
