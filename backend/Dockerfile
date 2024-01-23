FROM node:20.11

ENV NODE_ENV development

WORKDIR /backend

COPY . .

RUN yarn install

EXPOSE 5000

CMD [ "yarn", "start" ]