#!/usr/bin/env bash

cd scripts
# ./process-data.sh
cd -
cd webapp
rm -rf dist/*
npm run-script build
rm -rf ../gh-pages/*
cp -r dist/* ../../gh-pages/
cd -
cd ../gh-pages/
git add --all
git commit -m "deployment $(date)"
git push