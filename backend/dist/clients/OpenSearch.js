"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const opensearch_1 = require("@opensearch-project/opensearch");
const validateEnv_1 = __importDefault(require("../utils/validateEnv"));
const clientConfig = {
    node: validateEnv_1.default.OPENSEARCH_PROTOCOL +
        '://' +
        validateEnv_1.default.OPENSEARCH_AUTH +
        '@' +
        validateEnv_1.default.OPENSEARCH_HOST +
        ':' +
        validateEnv_1.default.OPENSEARCH_PORT,
};
// eslint-disable-next-line @typescript-eslint/no-extraneous-class
const oClient = new opensearch_1.Client({
    node: clientConfig.node,
    ssl: {
        rejectUnauthorized: false,
    },
});
exports.default = oClient;
