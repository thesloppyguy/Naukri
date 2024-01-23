FROM node:20.11

ENV NODE_ENV development

WORKDIR /frontend

COPY . .

RUN yarn install

EXPOSE 3000

CMD [ "yarn", "start" ]