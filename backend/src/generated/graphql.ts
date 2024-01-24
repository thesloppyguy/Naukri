import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type ActivateInput = {
  id: Scalars['ID']['input'];
  password: Scalars['String']['input'];
};

export type Candidate = {
  __typename?: 'Candidate';
  value?: Maybe<Scalars['String']['output']>;
};

export type CandidateQuery = {
  currentCompany?: InputMaybe<Scalars['String']['input']>;
  currentDesignation?: InputMaybe<Scalars['String']['input']>;
  department?: InputMaybe<Scalars['String']['input']>;
  expMax?: InputMaybe<Scalars['String']['input']>;
  expMin?: InputMaybe<Scalars['String']['input']>;
  gender?: InputMaybe<Scalars['String']['input']>;
  global?: InputMaybe<Scalars['Boolean']['input']>;
  industry?: InputMaybe<Scalars['String']['input']>;
  jobcode?: InputMaybe<Scalars['String']['input']>;
  keywords?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  location?: InputMaybe<Scalars['String']['input']>;
  must?: InputMaybe<Scalars['Boolean']['input']>;
  notKeywords?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  pdCourse?: InputMaybe<Scalars['String']['input']>;
  pgCourse?: InputMaybe<Scalars['String']['input']>;
  ugCourse?: InputMaybe<Scalars['String']['input']>;
};

export type Count = {
  __typename?: 'Count';
  job?: Maybe<Scalars['Int']['output']>;
  resume?: Maybe<Scalars['Int']['output']>;
};

export type Education = {
  __typename?: 'Education';
  degree_name?: Maybe<Scalars['String']['output']>;
  degree_type?: Maybe<Scalars['String']['output']>;
  institute_name?: Maybe<Scalars['String']['output']>;
};

export type Error = {
  __typename?: 'Error';
  message?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['Int']['output']>;
};

export type ForgotPasswordInput = {
  email: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

export type InviteOrganizationInput = {
  email: Scalars['String']['input'];
  name: Scalars['String']['input'];
  url?: InputMaybe<Scalars['String']['input']>;
};

export type InviteUserInput = {
  email: Scalars['String']['input'];
  name: Scalars['String']['input'];
  role: Role;
};

export type Job = {
  __typename?: 'Job';
  description?: Maybe<Scalars['String']['output']>;
  job_code_title?: Maybe<Scalars['String']['output']>;
  job_id?: Maybe<Scalars['String']['output']>;
};

export type JwtToken = {
  __typename?: 'JwtToken';
  token: Scalars['String']['output'];
};

export type LoginInput = {
  email: Scalars['String']['input'];
  organization: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  activateUser?: Maybe<Scalars['Boolean']['output']>;
  deleteOrganization?: Maybe<Scalars['Boolean']['output']>;
  deleteUser?: Maybe<Scalars['Boolean']['output']>;
  forgotPassword?: Maybe<Scalars['Boolean']['output']>;
  inviteOrganization?: Maybe<Scalars['Boolean']['output']>;
  inviteUser?: Maybe<Scalars['Boolean']['output']>;
  loginUser?: Maybe<UserWithToken>;
  registerOrganization?: Maybe<Scalars['Boolean']['output']>;
  resetPasswordUser?: Maybe<Scalars['Boolean']['output']>;
  updateOrganizationStatus?: Maybe<Scalars['Boolean']['output']>;
  updateUserRole?: Maybe<Scalars['Boolean']['output']>;
};


export type MutationActivateUserArgs = {
  input: ActivateInput;
};


export type MutationDeleteOrganizationArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUserArgs = {
  id: Scalars['ID']['input'];
};


export type MutationForgotPasswordArgs = {
  input: ForgotPasswordInput;
};


export type MutationInviteOrganizationArgs = {
  input: InviteOrganizationInput;
};


export type MutationInviteUserArgs = {
  input: InviteUserInput;
};


export type MutationLoginUserArgs = {
  input: LoginInput;
};


export type MutationRegisterOrganizationArgs = {
  input: RegisterInput;
};


export type MutationResetPasswordUserArgs = {
  input: ResetPasswordInput;
};


export type MutationUpdateOrganizationStatusArgs = {
  input: UpdateStatusInput;
};


export type MutationUpdateUserRoleArgs = {
  input: UpdateRoleInput;
};

export type Organization = {
  __typename?: 'Organization';
  _id?: Maybe<Scalars['ID']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Status>;
  url?: Maybe<Scalars['String']['output']>;
};

export type Query = {
  __typename?: 'Query';
  getCandidate?: Maybe<Array<Maybe<Candidate>>>;
  getCount?: Maybe<Count>;
  getJob?: Maybe<Array<Maybe<Job>>>;
  getJobs?: Maybe<Array<Maybe<Job>>>;
  getOrganizations?: Maybe<Array<Maybe<Organization>>>;
  getUserByOrganization?: Maybe<Array<Maybe<User>>>;
  getUserData?: Maybe<UserData>;
};


export type QueryGetCandidateArgs = {
  page?: InputMaybe<Scalars['Int']['input']>;
  query?: InputMaybe<CandidateQuery>;
};


export type QueryGetJobArgs = {
  query?: InputMaybe<Scalars['String']['input']>;
};

export type RegisterInput = {
  email: Scalars['String']['input'];
  name: Scalars['String']['input'];
  url?: InputMaybe<Scalars['String']['input']>;
};

export type ResetPasswordInput = {
  id: Scalars['ID']['input'];
  password: Scalars['String']['input'];
};

export enum Role {
  Admin = 'Admin',
  Maintainer = 'Maintainer',
  User = 'User'
}

export enum Status {
  Approved = 'Approved',
  Denied = 'Denied',
  Review = 'Review'
}

export type UpdateRoleInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Role>;
};

export type UpdateStatusInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Status>;
};

export type User = {
  __typename?: 'User';
  _id?: Maybe<Scalars['ID']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  organization?: Maybe<Scalars['ID']['output']>;
  password?: Maybe<Scalars['String']['output']>;
  role?: Maybe<Role>;
};

export type UserData = {
  __typename?: 'UserData';
  _id?: Maybe<Scalars['ID']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  organization?: Maybe<Organization>;
  role?: Maybe<Role>;
};

export type UserWithToken = {
  __typename?: 'UserWithToken';
  _id?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  organization?: Maybe<Organization>;
  role?: Maybe<Role>;
  userJwtToken?: Maybe<JwtToken>;
};

export type Work = {
  __typename?: 'Work';
  company?: Maybe<Scalars['String']['output']>;
  date_of_joining?: Maybe<Scalars['String']['output']>;
  date_of_leaving?: Maybe<Scalars['String']['output']>;
  designation?: Maybe<Scalars['String']['output']>;
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;



/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  ActivateInput: ActivateInput;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  Candidate: ResolverTypeWrapper<Candidate>;
  CandidateQuery: CandidateQuery;
  Count: ResolverTypeWrapper<Count>;
  Education: ResolverTypeWrapper<Education>;
  Error: ResolverTypeWrapper<Error>;
  ForgotPasswordInput: ForgotPasswordInput;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  InviteOrganizationInput: InviteOrganizationInput;
  InviteUserInput: InviteUserInput;
  Job: ResolverTypeWrapper<Job>;
  JwtToken: ResolverTypeWrapper<JwtToken>;
  LoginInput: LoginInput;
  Mutation: ResolverTypeWrapper<{}>;
  Organization: ResolverTypeWrapper<Organization>;
  Query: ResolverTypeWrapper<{}>;
  RegisterInput: RegisterInput;
  ResetPasswordInput: ResetPasswordInput;
  Role: Role;
  Status: Status;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  UpdateRoleInput: UpdateRoleInput;
  UpdateStatusInput: UpdateStatusInput;
  User: ResolverTypeWrapper<User>;
  UserData: ResolverTypeWrapper<UserData>;
  UserWithToken: ResolverTypeWrapper<UserWithToken>;
  Work: ResolverTypeWrapper<Work>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  ActivateInput: ActivateInput;
  Boolean: Scalars['Boolean']['output'];
  Candidate: Candidate;
  CandidateQuery: CandidateQuery;
  Count: Count;
  Education: Education;
  Error: Error;
  ForgotPasswordInput: ForgotPasswordInput;
  ID: Scalars['ID']['output'];
  Int: Scalars['Int']['output'];
  InviteOrganizationInput: InviteOrganizationInput;
  InviteUserInput: InviteUserInput;
  Job: Job;
  JwtToken: JwtToken;
  LoginInput: LoginInput;
  Mutation: {};
  Organization: Organization;
  Query: {};
  RegisterInput: RegisterInput;
  ResetPasswordInput: ResetPasswordInput;
  String: Scalars['String']['output'];
  UpdateRoleInput: UpdateRoleInput;
  UpdateStatusInput: UpdateStatusInput;
  User: User;
  UserData: UserData;
  UserWithToken: UserWithToken;
  Work: Work;
};

export type CandidateResolvers<ContextType = any, ParentType extends ResolversParentTypes['Candidate'] = ResolversParentTypes['Candidate']> = {
  value?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CountResolvers<ContextType = any, ParentType extends ResolversParentTypes['Count'] = ResolversParentTypes['Count']> = {
  job?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  resume?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EducationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Education'] = ResolversParentTypes['Education']> = {
  degree_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  degree_type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  institute_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ErrorResolvers<ContextType = any, ParentType extends ResolversParentTypes['Error'] = ResolversParentTypes['Error']> = {
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type JobResolvers<ContextType = any, ParentType extends ResolversParentTypes['Job'] = ResolversParentTypes['Job']> = {
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  job_code_title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  job_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type JwtTokenResolvers<ContextType = any, ParentType extends ResolversParentTypes['JwtToken'] = ResolversParentTypes['JwtToken']> = {
  token?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  activateUser?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<MutationActivateUserArgs, 'input'>>;
  deleteOrganization?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<MutationDeleteOrganizationArgs, 'id'>>;
  deleteUser?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<MutationDeleteUserArgs, 'id'>>;
  forgotPassword?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<MutationForgotPasswordArgs, 'input'>>;
  inviteOrganization?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<MutationInviteOrganizationArgs, 'input'>>;
  inviteUser?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<MutationInviteUserArgs, 'input'>>;
  loginUser?: Resolver<Maybe<ResolversTypes['UserWithToken']>, ParentType, ContextType, RequireFields<MutationLoginUserArgs, 'input'>>;
  registerOrganization?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<MutationRegisterOrganizationArgs, 'input'>>;
  resetPasswordUser?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<MutationResetPasswordUserArgs, 'input'>>;
  updateOrganizationStatus?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<MutationUpdateOrganizationStatusArgs, 'input'>>;
  updateUserRole?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<MutationUpdateUserRoleArgs, 'input'>>;
};

export type OrganizationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Organization'] = ResolversParentTypes['Organization']> = {
  _id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['Status']>, ParentType, ContextType>;
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  getCandidate?: Resolver<Maybe<Array<Maybe<ResolversTypes['Candidate']>>>, ParentType, ContextType, Partial<QueryGetCandidateArgs>>;
  getCount?: Resolver<Maybe<ResolversTypes['Count']>, ParentType, ContextType>;
  getJob?: Resolver<Maybe<Array<Maybe<ResolversTypes['Job']>>>, ParentType, ContextType, Partial<QueryGetJobArgs>>;
  getJobs?: Resolver<Maybe<Array<Maybe<ResolversTypes['Job']>>>, ParentType, ContextType>;
  getOrganizations?: Resolver<Maybe<Array<Maybe<ResolversTypes['Organization']>>>, ParentType, ContextType>;
  getUserByOrganization?: Resolver<Maybe<Array<Maybe<ResolversTypes['User']>>>, ParentType, ContextType>;
  getUserData?: Resolver<Maybe<ResolversTypes['UserData']>, ParentType, ContextType>;
};

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  _id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  organization?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  password?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  role?: Resolver<Maybe<ResolversTypes['Role']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserDataResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserData'] = ResolversParentTypes['UserData']> = {
  _id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  organization?: Resolver<Maybe<ResolversTypes['Organization']>, ParentType, ContextType>;
  role?: Resolver<Maybe<ResolversTypes['Role']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserWithTokenResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserWithToken'] = ResolversParentTypes['UserWithToken']> = {
  _id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  organization?: Resolver<Maybe<ResolversTypes['Organization']>, ParentType, ContextType>;
  role?: Resolver<Maybe<ResolversTypes['Role']>, ParentType, ContextType>;
  userJwtToken?: Resolver<Maybe<ResolversTypes['JwtToken']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type WorkResolvers<ContextType = any, ParentType extends ResolversParentTypes['Work'] = ResolversParentTypes['Work']> = {
  company?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  date_of_joining?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  date_of_leaving?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  designation?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Candidate?: CandidateResolvers<ContextType>;
  Count?: CountResolvers<ContextType>;
  Education?: EducationResolvers<ContextType>;
  Error?: ErrorResolvers<ContextType>;
  Job?: JobResolvers<ContextType>;
  JwtToken?: JwtTokenResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Organization?: OrganizationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
  UserData?: UserDataResolvers<ContextType>;
  UserWithToken?: UserWithTokenResolvers<ContextType>;
  Work?: WorkResolvers<ContextType>;
};

