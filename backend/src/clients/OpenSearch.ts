import { Client } from '@opensearch-project/opensearch';
import env from '../utils/validateEnv';

const clientConfig = {
  node:
    env.OPENSEARCH_PROTOCOL +
    '://' +
    env.OPENSEARCH_AUTH +
    '@' +
    env.OPENSEARCH_HOST +
    ':' +
    env.OPENSEARCH_PORT,
};

// eslint-disable-next-line @typescript-eslint/no-extraneous-class
const oClient = new Client({
  node: clientConfig.node,
  ssl: {
    rejectUnauthorized: false,
  },
});

export default oClient;
