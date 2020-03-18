FROM arm32v7/python:3.8.2-slim-buster

RUN apt-get update && apt-get install -y \
  unzip \
  curl \
  git \ 
  software-properties-common \ 
  jq

RUN curl -sL https://deb.nodesource.com/setup_12.x | bash -
RUN apt-get install -y nodejs

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

RUN mkdir -p /corona
ADD https://api.github.com/repos/arbakker/corona-map-nl/git/refs/heads/master version.json
RUN git clone -b master "git@github.com:arbakker/corona-map-nl.git" /corona/corona

RUN git config --global user.email "a.r.bakker1@gmail.com"
RUN git config --global user.name "Anton Bakker"


WORKDIR /corona/corona
ENTRYPOINT ["/corona/corona/deploy.sh"] 
