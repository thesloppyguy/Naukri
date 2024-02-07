"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const validateEnv_1 = __importDefault(require("../utils/validateEnv"));
const graphql_1 = require("graphql");
const getUser = async (token) => {
    try {
        if (token) {
            const user = jsonwebtoken_1.default.verify(token, validateEnv_1.default.SESSION_SECRET);
            return user;
        }
        return null;
    }
    catch (error) {
        return null;
    }
};
const context = async ({ req }) => {
    //   console.log(req.body.operationName);
    if (req.body.operationName === 'IntrospectionQuery') {
        // console.log('blocking introspection query..');
        return {};
    }
    // allowing the 'CreateUser' and 'Login' queries to pass without giving the token
    if (req.body.operationName === 'registerOrganization' ||
        req.body.operationName === 'loginUser' ||
        req.body.operationName === 'activateUser' ||
        req.body.operationName === 'forgotPassword' ||
        req.body.operationName === 'resetPasswordUser' ||
        req.body.operationName === 'loginUser') {
        return {};
    }
    // get the user token from the headers
    const token = req.headers.authorization || '';
    // try to retrieve a user with the token
    const user = await getUser(token);
    if (user == null) {
        throw new graphql_1.GraphQLError('User Unauthorized', {
            extensions: { code: 'CUSTOM_CODE_401' },
        });
    }
    // add the user to the context
    return { user };
};
exports.default = context;
