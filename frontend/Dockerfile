FROM node:10.16-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install -g yarn --silent
RUN yarn install

COPY . .

EXPOSE 3000

CMD ["yarn","start"]