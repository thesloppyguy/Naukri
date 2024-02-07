import jwt from 'jsonwebtoken';
import env from '../utils/validateEnv';
import { Request, Response } from 'express';
import { GraphQLError } from 'graphql';

const getUser = async (token: string) => {
  try {
    if (token) {
      const user = jwt.verify(token, env.SESSION_SECRET);
      return user;
    }
    return null;
  } catch (error) {
    return null;
  }
};

const context = async ({ req }: { req: Request; res: Response }) => {
  //   console.log(req.body.operationName);
  if (req.body.operationName === 'IntrospectionQuery') {
    // console.log('blocking introspection query..');
    return {};
  }
  // allowing the 'CreateUser' and 'Login' queries to pass without giving the token
  if (
    req.body.operationName === 'registerOrganization' ||
    req.body.operationName === 'loginUser' ||
    req.body.operationName === 'activateUser' ||
    req.body.operationName === 'forgotPassword' ||
    req.body.operationName === 'resetPasswordUser' ||
    req.body.operationName === 'loginUser'
  ) {
    return {};
  }

  // get the user token from the headers
  const token = req.headers.authorization || '';

  // try to retrieve a user with the token
  const user = await getUser(token);
  if (user == null) {
    throw new GraphQLError('User Unauthorized', {
      extensions: { code: 'CUSTOM_CODE_401' },
    });
  }

  // add the user to the context
  return { user };
};

export default context;
