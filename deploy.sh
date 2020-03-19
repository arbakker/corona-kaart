#!/usr/bin/env bash
set -eu

git -C /corona/gh-pages pull
git -C /corona/corona pull

cd /corona/corona/scripts
./process-data.sh
cp ../data/corona.csv /corona/gh-pages/
cp ../data/updated.json /corona/gh-pages/

git -C /corona/gh-pages add --all
git -C /corona/gh-pages commit -m "update corona.csv - $(date)"
git -C /corona/gh-pages push
