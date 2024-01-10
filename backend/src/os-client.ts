import { Client } from '@opensearch-project/opensearch'

const host = '20.197.18.71'
const protocol = 'https'
const port = 9200
const auth = 'admin:admin'

const clientConfig = {
  node: protocol + '://' + auth + '@' + host + ':' + port
}

// eslint-disable-next-line @typescript-eslint/no-extraneous-class
const client = new Client({
  node: clientConfig.node,
  ssl: {
    rejectUnauthorized: false
  }
})

export default client
