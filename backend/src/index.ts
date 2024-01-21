import 'dotenv/config'
import express from 'express'
import env from './utils/validateEnv'
import path from 'path'
import { importSchema } from 'graphql-import'
import * as bodyParser from 'body-parser'
import { ApolloServer } from "@apollo/server"
import { expressMiddleware } from '@apollo/server/express4';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import resolvers from './resolver'
import cors from 'cors'
import session from 'express-session'
import MongoStore from 'connect-mongo'
import http from 'http'
import { MyContext } from './interfaces/server'
import mongoose from 'mongoose'


const port = env.PORT
const typeDefs = importSchema(path.join(__dirname, "/../schema.graphql"))
const app = express()
const httpServer = http.createServer(app);
const server = new ApolloServer<MyContext>({
  typeDefs,
  resolvers,
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
});


mongoose
  .connect(env.MONGO_CONNECTION_STRING)
  .then(() => {
    console.log('Mongoose connected')
    app.use(cors({
      origin: "http://localhost:3000",
      credentials: true
    }))

    app.use(session({
      secret: env.SESSION_SECRET,
      resave: false,
      saveUninitialized: false,
      cookie: {
        maxAge: 24 * 60 * 60 * 1000
      },
      rolling: true,
      store: MongoStore.create({
        mongoUrl: env.MONGO_CONNECTION_STRING
      })
    }))

    server.start().then(() => {
      app.use("/graphql",
        cors<cors.CorsRequest>(),
        bodyParser.json({ limit: '50mb' }),
        expressMiddleware(server, {
          context: async ({ req }) => ({ token: req.headers.token }),
        }),
      );

      httpServer.listen({ port: port }, () => {
        console.log(`🚀 Server ready at http://localhost:${port}/`);
      });
    });



  })
  .catch(console.error)

