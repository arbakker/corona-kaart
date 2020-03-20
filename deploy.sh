#!/usr/bin/env bash
set -eu

git -C ../corona pull
git clone -b gh-pages "git@github.com:arbakker/corona-map-nl.git" ../gh-pages

cd ../corona/webapp
npm install --only=prod 

cd ../corona/scripts
./process-data.sh

cd ../corona/webapp
rm -rf dist/*
npm run-script build
rm -rf ../gh-pages/*
cp -r dist/* ../../gh-pages/

cd ../gh-pages/
git add --all
git commit -m "deployment $(date)"
git push
