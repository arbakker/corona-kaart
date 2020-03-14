FROM debian:stretch

RUN apt-get update && apt-get install -y \
  unzip \
  curl \
  git \ 
  sqlite3 \
  gdal-bin \
  git \ 
  libsqlite3-mod-spatialite \
  software-properties-common
curl -sL https://deb.nodesource.com/setup_12.x | sudo bash -
apt-get install -y nodejs
npm install -g topojson-simplify  ndjson-cli  topojson-client

COPY  ~/.ssh/id_rsa*  /root/.ssh/

RUN mkdir -p /corona
git clone -b master git@github.com:arbakker/corona-map-nl.git /corona/corona
git clone -b master git@github.com:arbakker/corona-map-nl.git /corona/gh-pages

COPY data/src/Gemeentegrenzen.gml /corona/corona/data/src/Gemeentegrenzen.gml

WORKDIR /corona/corona/scripts
RUN bash -c "./process-data.sh"

