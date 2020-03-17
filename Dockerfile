FROM arm32v7/python:3.8.2-slim-buster

RUN apt-get update && apt-get install -y \
  unzip \
  curl \
  git \ 
  sqlite3 \
  libgdal-dev \
  gdal-bin \
  git \ 
  libsqlite3-mod-spatialite \
  software-properties-common \ 
  jq

RUN curl -sL https://deb.nodesource.com/setup_12.x | bash -
RUN apt-get install -y nodejs
RUN npm install -g topojson-simplify ndjson-cli topojson-client topojson-server

ADD "https://github.com/ericchiang/pup/releases/download/v0.4.0/pup_v0.4.0_linux_arm.zip" /pup.zip
RUN unzip /pup.zip -d /usr/local/bin/

# Copy over private key, and set permissions
# Warning! Anyone who gets their hands on this image will be able
# to retrieve this private key file from the corresponding image layer
COPY id_rsa* /root/.ssh/
RUN echo "   IdentityFile ~/.ssh/id_rsa" >> /etc/ssh/ssh_config
# Create known_hosts
RUN touch /root/.ssh/known_hosts
# Add bitbuckets key
RUN ssh-keyscan github.com >> /root/.ssh/known_hosts

RUN pip3 install --no-cache-dir click jenks_natural_breaks numpy

RUN mkdir -p /corona
RUN mkdir -p /corona/corona/webapp/data
RUN mkdir -p /corona/corona/data

RUN git config --global user.email "a.r.bakker1@gmail.com"
RUN git config --global user.name "Anton Bakker"

WORKDIR /corona/corona
ENTRYPOINT ["/corona/corona/deploy.sh"] 
