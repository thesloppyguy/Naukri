"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = __importDefault(require("../models/User"));
const Organization_1 = __importDefault(require("../models/Organization"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const graphql_1 = require("graphql");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const validateEnv_1 = __importDefault(require("../utils/validateEnv"));
const OpenSearch_1 = __importDefault(require("../clients/OpenSearch"));
const createSearchQuery_1 = require("../utils/createSearchQuery");
const sendInvite_1 = require("../utils/sendInvite");
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
const resolvers = {
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
                }
            };
        },
        getJob: async (_, { query }) => {
            const response = await OpenSearch_1.default.search({
                index: 'jobs',
                body: {
                    "query": {
                        "bool": {
                            "should": [{ "match_phrase": { "job_id": query } }, { "match_phrase": { "job_code_title": query } }]
                        }
                    },
                    "size": 200
                }
            });
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const jobs = response.body.hits.hits.map((job) => job._source);
            return jobs;
        },
        getJobs: async () => {
            const response = await OpenSearch_1.default.search({
                index: 'jobs',
                body: {
                    "query": {
                        "match_all": {}
                    },
                    "size": 200,
                }
            });
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const jobs = response.body.hits.hits.map((job) => job._source);
            return jobs;
        },
        getCount: async () => {
            const resumes = await OpenSearch_1.default.count({ index: "resumes" });
            const jobs = await OpenSearch_1.default.count({ index: "jobs" });
            return {
                resume: resumes.body.count,
                job: jobs.body.count,
            };
        },
        getCandidate: async (_, { query, page }) => {
            // console.log(query, page)
            const opensearchQuery = await (0, createSearchQuery_1.createGeneralQuery)(query, page);
            console.log(JSON.stringify(opensearchQuery));
            const response = await OpenSearch_1.default.search({
                index: 'resumes',
                body: opensearchQuery
            });
            // console.log(response.body.hits.total.value)
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const candidateList = response.body.hits.hits.map((candidates) => ({ value: JSON.stringify(candidates._source) }));
            return candidateList;
        },
        getOrganizations: async () => {
            const organizationList = await Organization_1.default.find({}).exec();
            const list = organizationList;
            return list;
        },
        getUserByOrganization: async (_, __, context) => {
            const userList = await User_1.default.find({ organization: context.user.organization._id }).exec();
            const list = userList;
            return list;
        }
    },
    Mutation: {
        registerOrganization: async (_, { input }) => {
            const name = input.name;
            const contactEmail = input.email;
            const url = input.url;
            const existingOrganizations = await Organization_1.default.findOne({ name: name, contactEmail: contactEmail }).exec();
            if (existingOrganizations !== null) {
                throw new graphql_1.GraphQLError("Organization already taken. Please check your email for an Invite.", { extensions: { code: 'CUSTOM_CODE_400' }, });
            }
            await Organization_1.default.create({
                name,
                contactEmail,
                url,
                status: 'Review'
            });
            return true;
        },
        inviteOrganization: async (_, { input }) => {
            const name = input.name;
            const contactEmail = input.email;
            const url = input.url;
            if (name == '' || contactEmail == '') {
                throw new graphql_1.GraphQLError("Paramenter Missing", { extensions: { code: 'CUSTOM_CODE_400' }, });
            }
            const existingOrganizations = await Organization_1.default.findOne({ name });
            if (existingOrganizations !== null) {
                throw new graphql_1.GraphQLError("Organization already taken.", { extensions: { code: 'CUSTOM_CODE_400' }, });
            }
            await Organization_1.default.create({
                name,
                contactEmail,
                url,
                status: 'Review'
            });
            // await sendInvite()
            return true;
        },
        deleteOrganization: async (_, { id }) => {
            console.log(id);
            const org = await Organization_1.default.findById(id);
            if (!org) {
                throw new graphql_1.GraphQLError("User not found", { extensions: { code: 'CUSTOM_CODE_400' }, });
            }
            await User_1.default.deleteMany({ organization: id });
            await Organization_1.default.deleteOne({ _id: id });
            return true;
        },
        updateOrganizationStatus: async (_, { input }) => {
            const id = input.id;
            const status = input.status;
            const organization = await Organization_1.default.findById(id);
            if (organization == null) {
                throw new graphql_1.GraphQLError("Organization Not Found", { extensions: { code: 'CUSTOM_CODE_400' }, });
            }
            await Organization_1.default.updateOne({ _id: id }, { $set: { status: status } });
            if (status === 'Approved') {
                const user = await User_1.default.findOne({ email: organization === null || organization === void 0 ? void 0 : organization.contactEmail, organization: organization === null || organization === void 0 ? void 0 : organization._id });
                if (user == null) {
                    User_1.default.create({
                        name: organization === null || organization === void 0 ? void 0 : organization.name,
                        email: organization === null || organization === void 0 ? void 0 : organization.contactEmail,
                        role: "Admin",
                        organization: organization
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
                throw new graphql_1.GraphQLError("Parameter Missing", { extensions: { code: 'CUSTOM_CODE_400' }, });
            }
            const user = await User_1.default.findOne({ email });
            if (user) {
                throw new graphql_1.GraphQLError("User already exists", { extensions: { code: 'CUSTOM_CODE_400' }, });
            }
            const newUser = await User_1.default.create({
                name,
                email,
                role,
                organization: organization
            });
            await (0, sendInvite_1.sendInvite)(newUser._id.toString(), email, 'activate');
            return true;
        },
        resetPasswordUser: async (_, { input }) => {
            const id = input.id;
            const passwordRaw = input.password;
            const passwordHashed = await bcrypt_1.default.hash(passwordRaw, 10);
            const result = await User_1.default.updateOne({ _id: id }, { $set: { password: passwordHashed } });
            if (result.modifiedCount === 0) {
                throw new graphql_1.GraphQLError("User not found", { extensions: { code: 'CUSTOM_CODE_400' }, });
            }
            return true;
        },
        activateUser: async (_, { input }) => {
            const id = input.id;
            const passwordRaw = input.password;
            const passwordHashed = await bcrypt_1.default.hash(passwordRaw, 10);
            const result = await User_1.default.updateOne({ _id: id }, { $set: { password: passwordHashed } });
            if (result.modifiedCount === 0) {
                throw new graphql_1.GraphQLError("User not found", { extensions: { code: 'CUSTOM_CODE_400' }, });
            }
            return true;
        },
        deleteUser: async (_, { id }) => {
            const user = await User_1.default.findById(id);
            if (!user) {
                throw new graphql_1.GraphQLError("User not found", { extensions: { code: 'CUSTOM_CODE_400' }, });
            }
            await User_1.default.deleteOne({ _id: id });
            return true;
        },
        updateUserRole: async (_, { input }) => {
            const id = input.id;
            const role = input.role;
            const user = await User_1.default.findById(id);
            if (user == null) {
                throw new graphql_1.GraphQLError("User not Found", { extensions: { code: 'CUSTOM_CODE_400' }, });
            }
            await User_1.default.updateOne({ _id: id }, { $set: { role: role } });
            return true;
        },
        loginUser: async (_, { input: { organization, email, password } }) => {
            const org = await Organization_1.default.findOne({ name: organization });
            if (org == null) {
                throw new graphql_1.GraphQLError("Invalid Organization", { extensions: { code: 'CUSTOM_CODE_400' }, });
            }
            const user = await User_1.default.findOne({
                $and: [{ email: email }, { organization: org._id }],
            }).populate('organization').exec();
            if (user == null) {
                throw new graphql_1.GraphQLError("Invalid Credentails", { extensions: { code: 'CUSTOM_CODE_400' }, });
            }
            const match = await bcrypt_1.default.compare(password, user === null || user === void 0 ? void 0 : user.password);
            if (!match) {
                throw new graphql_1.GraphQLError("Invalid Credentails", { extensions: { code: 'CUSTOM_CODE_400' }, });
            }
            if (user) {
                const token = jsonwebtoken_1.default.sign(user.toJSON(), validateEnv_1.default.SESSION_SECRET, { expiresIn: process.env.TOKEN_EXPIRY_TIME });
                return Object.assign(Object.assign({}, user.toJSON()), { userJwtToken: {
                        token: token,
                    } });
            }
            throw new graphql_1.GraphQLError("Invalid Credintials", { extensions: { code: 'CUSTOM_CODE_400' }, });
        },
    }
};
exports.default = resolvers;
