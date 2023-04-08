FROM node:14.18

WORKDIR /app

ENV LANG C.UTF-8
ENV TZ Asia/Tokyo

RUN apt-get update -y
RUN apt-get upgrade -y
RUN npm install npm@6.14.4
RUN npm install ejs@3.0.1
RUN npm install -g nuxt@2.0.0
RUN npm install -g create-nuxt-app@2.15.0
RUN npm install defu@3.1.0

COPY . /app