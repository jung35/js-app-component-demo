FROM node:15-buster
WORKDIR /usr/src/app

RUN apt-get update
RUN apt-get --yes --force-yes install unzip
RUN apt-get --yes install build-essential libpng-dev

RUN gcc --version
RUN node -v
RUN npm -v
