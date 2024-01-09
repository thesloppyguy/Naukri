import express, { type Express } from 'express'
import dotenv from 'dotenv'
import cors from 'cors'

dotenv.config()

const app: Express = express()
const port = 3000

app.use(express.json())
app.use(cors())
app.get('/', (req, res) => {
  console.log(req)
  return res.status(200).send('Welcome to Bookstore!!!')
})

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`)
})
