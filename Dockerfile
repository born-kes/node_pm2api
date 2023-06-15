FROM node:19.6.0

RUN mkdir /root/.ssh

RUN npm install --force -g yarn pm2@latest typescript ts-node

WORKDIR /mnt/pm2api

EXPOSE 9018
