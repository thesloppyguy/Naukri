import { cleanEnv } from 'envalid'
import { port, str } from 'envalid/dist/validators'

export default cleanEnv(process.env, {
  MONGO_CONNECTION_STRING: str(),
  PORT: port(),
  SESSION_SECRET: str(),
  OPENSEARCH_HOST: str(),
  OPENSEARCH_PROTOCOL: str(),
  OPENSEARCH_PORT: str(),
  OPENSEARCH_AUTH: str(),
})
