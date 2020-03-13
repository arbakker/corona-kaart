#!/usr/bin/env bash
set -eu


python3 classify.py ../data/corona_nl.gpkg 5 --layer gemeenten_corona --attribute aantal > ../webapp/classes.json