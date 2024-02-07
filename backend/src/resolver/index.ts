import { Resolvers, User, Organization } from '../generated/graphql';
import UserModel from '../models/User';
import OrgnisationModel from '../models/Organization';
import bcrypt from 'bcrypt';
import { GraphQLError } from 'graphql';
import jwt from 'jsonwebtoken';
import env from '../utils/validateEnv';
import oClient from '../clients/OpenSearch';
import { createGeneralQuery } from '../utils/createSearchQuery';
import { SearchBody } from '../interfaces/search';
import { sendInvite } from '../utils/sendInvite';

// const testData=[
// {first_name:"mango1"},
// {first_name:"mango2"},
// {first_name:"mango3"},
// {first_name:"mango4"},
// {first_name:"mango5"},
// {first_name:"mango6"},
// {first_name:"mango7"},
// {first_name:"mango8"},
// {first_name:"mango11"},
// {first_name:"mango22"},
// {first_name:"mango33"},
// {first_name:"mango44"},
// {first_name:"mango55"},
// {first_name:"mango66"},
// {first_name:"mango77"},
// {first_name:"mango88"},
// {first_name:"mango111"},
// {first_name:"mango222"},
// {first_name:"mango333"},
// {first_name:"mango444"},
// {first_name:"mango555"},
// {first_name:"mango666"},
// {first_name:"mango777"},
// {first_name:"mango888"},
// {first_name:"mango1111"},
// {first_name:"mango2222"},
// {first_name:"mango3333"},
// ]
const resolvers: Resolvers = {
  Query: {
    getUserData: async (_, __, context) => {
      return {
        _id: context.user._id,
        name: context.user.name,
        email: context.user.email,
        role: context.user.role,
        organization: {
          _id: context.user.organization._id,
          name: context.user.organization.name,
          email: context.user.organization.contactEmail,
          url: context.user.organization.url,
          status: context.user.organization.status,
        },
      };
    },
    getJob: async (_, { query }) => {
      const response = await oClient.search({
        index: 'jobs',
        body: {
          query: {
            bool: {
              should: [
                { match_phrase: { job_id: query } },
                { match_phrase: { job_code_title: query } },
              ],
            },
          },
          size: 200,
        },
      });
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const jobs = response.body.hits.hits.map((job: any) => job._source);
      return jobs;
    },
    getJobs: async () => {
      const response = await oClient.search({
        index: 'jobs',
        body: {
          query: {
            match_all: {},
          },
          size: 200,
        },
      });
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const jobs = response.body.hits.hits.map((job: any) => job._source);
      return jobs;
    },
    getCount: async () => {
      const resumes = await oClient.count({ index: 'resumes' });
      const jobs = await oClient.count({ index: 'jobs' });
      return {
        resume: resumes.body.count,
        job: jobs.body.count,
      };
    },
    getCandidate: async (_, { query, page }) => {
      // console.log(query, page)
      const opensearchQuery = await createGeneralQuery(
        query as SearchBody,
        page as number,
      );
      console.log(JSON.stringify(opensearchQuery));
      const response = await oClient.search({
        index: 'resumes',
        body: opensearchQuery,
      });
      // console.log(response.body.hits.total.value)
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const candidateList = response.body.hits.hits.map((candidates: any) => ({
        value: JSON.stringify(candidates._source),
      }));
      return candidateList;
    },
    getOrganizations: async () => {
      const organizationList = await OrgnisationModel.find({}).exec();
      const list = organizationList as unknown as Organization[];
      return list;
    },
    getUserByOrganization: async (_, __, context) => {
      const userList = await UserModel.find({
        organization: context.user.organization._id,
      }).exec();
      const list = userList as unknown as User[];
      return list;
    },
  },
  Mutation: {
    registerOrganization: async (_, { input }) => {
      const name = input.name;
      const contactEmail = input.email;
      const url = input.url;
      const existingOrganizations = await OrgnisationModel.findOne({
        name: name,
        contactEmail: contactEmail,
      }).exec();
      if (existingOrganizations !== null) {
        throw new GraphQLError(
          'Organization already taken. Please check your email for an Invite.',
          { extensions: { code: 'CUSTOM_CODE_400' } },
        );
      }
      await OrgnisationModel.create({
        name,
        contactEmail,
        url,
        status: 'Review',
      });
      return true;
    },
    inviteOrganization: async (_, { input }) => {
      const name = input.name;
      const contactEmail = input.email;
      const url = input.url;
      if (name == '' || contactEmail == '') {
        throw new GraphQLError('Paramenter Missing', {
          extensions: { code: 'CUSTOM_CODE_400' },
        });
      }
      const existingOrganizations = await OrgnisationModel.findOne({ name });
      if (existingOrganizations !== null) {
        throw new GraphQLError('Organization already taken.', {
          extensions: { code: 'CUSTOM_CODE_400' },
        });
      }
      await OrgnisationModel.create({
        name,
        contactEmail,
        url,
        status: 'Review',
      });

      // await sendInvite()
      return true;
    },
    deleteOrganization: async (_, { id }) => {
      console.log(id);
      const org = await OrgnisationModel.findById(id);
      if (!org) {
        throw new GraphQLError('User not found', {
          extensions: { code: 'CUSTOM_CODE_400' },
        });
      }
      await UserModel.deleteMany({ organization: id });
      await OrgnisationModel.deleteOne({ _id: id });
      return true;
    },
    updateOrganizationStatus: async (_, { input }) => {
      const id = input.id;
      const status = input.status;

      const organization = await OrgnisationModel.findById(id);
      if (organization == null) {
        throw new GraphQLError('Organization Not Found', {
          extensions: { code: 'CUSTOM_CODE_400' },
        });
      }
      await OrgnisationModel.updateOne(
        { _id: id },
        { $set: { status: status } },
      );
      if (status === 'Approved') {
        const user = await UserModel.findOne({
          email: organization?.contactEmail,
          organization: organization?._id,
        });
        if (user == null) {
          UserModel.create({
            name: organization?.name,
            email: organization?.contactEmail,
            role: 'Admin',
            organization: organization,
          });
        }
      }
      return true;
    },
    inviteUser: async (_, { input }, context) => {
      const name = input.name;
      const email = input.email;
      const role = input.role;
      const organization = context.user.organization._id;
      if (name == '' || email == '') {
        throw new GraphQLError('Parameter Missing', {
          extensions: { code: 'CUSTOM_CODE_400' },
        });
      }
      const user = await UserModel.findOne({ email });
      if (user) {
        throw new GraphQLError('User already exists', {
          extensions: { code: 'CUSTOM_CODE_400' },
        });
      }
      const newUser = await UserModel.create({
        name,
        email,
        role,
        organization: organization,
      });
      await sendInvite(newUser._id.toString(), email, 'activate');
      return true;
    },
    resetPasswordUser: async (_, { input }) => {
      const id = input.id;
      const passwordRaw = input.password;
      const passwordHashed = await bcrypt.hash(passwordRaw, 10);
      const result = await UserModel.updateOne(
        { _id: id },
        { $set: { password: passwordHashed } },
      );
      if (result.modifiedCount === 0) {
        throw new GraphQLError('User not found', {
          extensions: { code: 'CUSTOM_CODE_400' },
        });
      }
      return true;
    },
    activateUser: async (_, { input }) => {
      const id = input.id;
      const passwordRaw = input.password;
      const passwordHashed = await bcrypt.hash(passwordRaw, 10);
      const result = await UserModel.updateOne(
        { _id: id },
        { $set: { password: passwordHashed } },
      );
      if (result.modifiedCount === 0) {
        throw new GraphQLError('User not found', {
          extensions: { code: 'CUSTOM_CODE_400' },
        });
      }
      return true;
    },
    deleteUser: async (_, { id }) => {
      const user = await UserModel.findById(id);
      if (!user) {
        throw new GraphQLError('User not found', {
          extensions: { code: 'CUSTOM_CODE_400' },
        });
      }
      await UserModel.deleteOne({ _id: id });
      return true;
    },
    updateUserRole: async (_, { input }) => {
      const id = input.id;
      const role = input.role;
      const user = await UserModel.findById(id);
      if (user == null) {
        throw new GraphQLError('User not Found', {
          extensions: { code: 'CUSTOM_CODE_400' },
        });
      }
      await UserModel.updateOne({ _id: id }, { $set: { role: role } });
      return true;
    },
    loginUser: async (_, { input: { organization, email, password } }) => {
      const org = await OrgnisationModel.findOne({ name: organization });
      if (org == null) {
        throw new GraphQLError('Invalid Organization', {
          extensions: { code: 'CUSTOM_CODE_400' },
        });
      }
      const user = await UserModel.findOne({
        $and: [{ email: email }, { organization: org._id }],
      })
        .populate('organization')
        .exec();
      if (user == null) {
        throw new GraphQLError('Invalid Credentails', {
          extensions: { code: 'CUSTOM_CODE_400' },
        });
      }
      const match = await bcrypt.compare(password, user?.password as string);
      if (!match) {
        throw new GraphQLError('Invalid Credentails', {
          extensions: { code: 'CUSTOM_CODE_400' },
        });
      }
      if (user) {
        const token = jwt.sign(user.toJSON(), env.SESSION_SECRET, {
          expiresIn: process.env.TOKEN_EXPIRY_TIME,
        });
        return {
          ...user.toJSON(),
          userJwtToken: {
            token: token,
          },
        };
      }
      throw new GraphQLError('Invalid Credintials', {
        extensions: { code: 'CUSTOM_CODE_400' },
      });
    },
  },
};

export default resolvers;
