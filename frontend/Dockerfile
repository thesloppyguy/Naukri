FROM node:20.11 AS production

ENV NODE_ENV production

WORKDIR /usr/src/app    

COPY package.json .
COPY yarn.lock .

RUN yarn global add typescript
RUN yarn install

COPY . . 

RUN yarn build

CMD ["node", "server.js"]