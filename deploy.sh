#!/usr/bin/env bash
set -eu
BASE_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" > /dev/null && pwd )"
PAGES_DIR="$BASE_DIR/../gh-pages"

git -C "$PAGES_DIR" pull
git -C "$BASE_DIR" pull

"$BASE_DIR/scripts/process-data.sh"

cp "$BASE_DIR/data/corona.csv" "$PAGES_DIR/"
cp "$BASE_DIR/data/updated.json" "$PAGES_DIR/"

git -C "$PAGES_DIR" add --all
git -C "$PAGES_DIR" commit -m "update corona.csv - $(date)"
git -C "$PAGES_DIR" push
