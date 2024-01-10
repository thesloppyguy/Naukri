import 'dotenv/config'
import express, { type Express } from 'express'
import opensearchRoutes from './routes/opensearch'
import userRoutes from './routes/users'
import maintainerRoutes from './routes/maintainer'
import session from 'express-session'
import env from './utils/validateEnv'
import MongoStore from 'connect-mongo'
import cors from 'cors'

const app: Express = express()

app.use(express.json())
app.use(cors())
app.use(session({
  secret: env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 60 * 60 * 1000
  },
  rolling: true,
  store: MongoStore.create({
    mongoUrl: env.MONGO_CONNECTION_STRING
  })
}))

app.use('/api/', userRoutes)
app.use('/api/', opensearchRoutes)
app.use('/api/', maintainerRoutes)
export default app
