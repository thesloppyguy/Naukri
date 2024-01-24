"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const validateEnv_1 = __importDefault(require("./utils/validateEnv"));
const path_1 = __importDefault(require("path"));
const graphql_import_1 = require("graphql-import");
const bodyParser = __importStar(require("body-parser"));
const server_1 = require("@apollo/server");
const express4_1 = require("@apollo/server/express4");
const drainHttpServer_1 = require("@apollo/server/plugin/drainHttpServer");
const resolver_1 = __importDefault(require("./resolver"));
const cors_1 = __importDefault(require("cors"));
const http_1 = __importDefault(require("http"));
const context_1 = __importDefault(require("./context"));
const mongoose_1 = __importDefault(require("mongoose"));
const port = validateEnv_1.default.PORT;
const typeDefs = (0, graphql_import_1.importSchema)(path_1.default.join(__dirname, "/../schema.graphql"));
const app = (0, express_1.default)();
const httpServer = http_1.default.createServer(app);
const server = new server_1.ApolloServer({
    typeDefs,
    resolvers: resolver_1.default,
    plugins: [(0, drainHttpServer_1.ApolloServerPluginDrainHttpServer)({ httpServer })],
});
mongoose_1.default
    .connect(validateEnv_1.default.MONGO_CONNECTION_STRING)
    .then(() => {
    console.log('Mongoose connected');
    app.use((0, cors_1.default)({
        origin: validateEnv_1.default.DOMAIN_URL,
        credentials: true
    }));
    server.start().then(() => {
        app.use("/graphql", (0, cors_1.default)(), bodyParser.json({ limit: '50mb' }), (0, express4_1.expressMiddleware)(server, {
            context: context_1.default,
        }));
        httpServer.listen({ port: port }, () => {
            console.log(`🚀 Server ready at http://localhost:${port}/`);
        });
    });
})
    .catch(console.error);
