#!/usr/bin/env bash
set -eu
BASE_DIR=../data
DEST_DIR=../data-src

rm -rf $BASE_DIR/*
mkdir -p $BASE_DIR
curl https://geodata.nationaalgeoregister.nl/bestuurlijkegrenzen/extract/bestuurlijkegrenzen.zip -o $BASE_DIR/bestuurlijkegrenzen.zip
unzip -o $BASE_DIR/bestuurlijkegrenzen.zip  -d $BASE_DIR
ogr2ogr -f GPKG "$BASE_DIR/gemeenten.gpkg" "$BASE_DIR/Gemeentegrenzen.gml" Gemeenten -nln gemeenten

# proprces for simplified gemeenten
ogr2ogr -f GeoJSON "$BASE_DIR/gemeenten.json" "$BASE_DIR/gemeenten.gpkg" gemeenten -nln gemeenten -t_srs "EPSG:4326"
ndjson-cat "$BASE_DIR/gemeenten.json"  | ndjson-split 'd.features' > $BASE_DIR/gemeenten_ndjson.json
# create simplified gemeenten polygons
geo2topo -q 1e5 -n gemeenten_simplified=$BASE_DIR/gemeenten_ndjson.json | toposimplify -s 0.00000001 -f  | topo2geo $DEST_DIR/gemeenten_simplified.json
# create simplified gemeenten borders polylines (inside) [see https://medium.com/@mbostock/command-line-cartography-part-3-1158e4c55a1e]
geo2topo -q 1e5 -n gemeenten_borders=$BASE_DIR/gemeenten_ndjson.json | toposimplify -s 0.00000001 -f | topomerge --mesh -f 'a !== b' gemeenten_borders=gemeenten_borders  | topo2geo $BASE_DIR/gemeenten_borders.json 
# create simplified gemeenten borders polylines (outside)
geo2topo -q 1e5 -n gemeenten_borders_outside=$BASE_DIR/gemeenten_ndjson.json | toposimplify -s 0.00000001 -f | topomerge --mesh -f 'a === b' gemeenten_borders_outside=gemeenten_borders_outside  | topo2geo $BASE_DIR/gemeenten_borders_outside.json 

ogr2ogr -f GeoJSON -lco "COORDINATE_PRECISION=6" "$DEST_DIR/gemeenten_points.json" "$DEST_DIR/gemeenten_simplified.json" -dialect SQLITE -sql "select centroid(Geometry) as geom, Code, Gemeentenaam from gemeenten_simplified" -nln gemeenten_points -nlt POINT -t_srs EPSG:4326

mkdir -p ../webapp/data/
cp $BASE_DIR/gemeenten_borders.json  ../webapp/data/
cp $BASE_DIR/gemeenten_borders_outside.json  ../webapp/data/
cp $DEST_DIR/gemeenten_simplified.json ../webapp/data/
cp $DEST_DIR/gemeenten_points.json ../webapp/data/


