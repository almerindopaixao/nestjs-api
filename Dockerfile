FROM node:14.17.6-alpine

RUN npm install -g @nestjs/cli@8.0.0

USER node

WORKDIR /home/node/app

