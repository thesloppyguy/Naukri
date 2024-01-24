"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const envalid_1 = require("envalid");
const validators_1 = require("envalid/dist/validators");
exports.default = (0, envalid_1.cleanEnv)(process.env, {
    MONGO_CONNECTION_STRING: (0, validators_1.str)(),
    PORT: (0, validators_1.port)(),
    SESSION_SECRET: (0, validators_1.str)(),
    OPENSEARCH_HOST: (0, validators_1.str)(),
    OPENSEARCH_PROTOCOL: (0, validators_1.str)(),
    OPENSEARCH_PORT: (0, validators_1.str)(),
    OPENSEARCH_AUTH: (0, validators_1.str)(),
    TOKEN_EXPIRY_TIME: (0, validators_1.str)(),
    DOMAIN_URL: (0, validators_1.str)(),
    EMAIL_URL: (0, validators_1.str)(),
    POSTMARK_KEY: (0, validators_1.str)(),
});
