#!/usr/bin/env bash
set -eu

git -C /corona/corona pull
git clone -b gh-pages "git@github.com:arbakker/corona-map-nl.git" /corona/gh-pages

cd /corona/corona/webapp
npm install --only=prod 

cd /corona/corona/scripts
./process-data.sh

cd /corona/corona/webapp
rm -rf dist/*
npm run-script build
rm -rf ../gh-pages/*
cp -r dist/* ../../gh-pages/

cd /corona/gh-pages/
git add --all
git commit -m "deployment $(date)"
git push
