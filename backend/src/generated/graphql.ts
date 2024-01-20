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

export type BoolAuth = {
  __typename?: 'BoolAuth';
  error?: Maybe<Error>;
  response?: Maybe<Scalars['Boolean']['output']>;
};

export type Error = {
  __typename?: 'Error';
  message?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['Int']['output']>;
};

export type InviteOrganizationInput = {
  email: Scalars['String']['input'];
  name: Scalars['String']['input'];
  url?: InputMaybe<Scalars['String']['input']>;
};

export type InviteUserInput = {
  email: Scalars['String']['input'];
  name: Scalars['String']['input'];
  organization: Scalars['ID']['input'];
  role: Role;
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
  activateUser?: Maybe<BoolAuth>;
  deleteOrganization?: Maybe<BoolAuth>;
  deleteUser?: Maybe<BoolAuth>;
  inviteOrganization?: Maybe<BoolAuth>;
  inviteUser?: Maybe<BoolAuth>;
  loginUser?: Maybe<UserAuth>;
  registerOrganization?: Maybe<BoolAuth>;
  resetPasswordUser?: Maybe<BoolAuth>;
  updateOrganizationStatus?: Maybe<BoolAuth>;
  updateUserRole?: Maybe<BoolAuth>;
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
  getOrganizations?: Maybe<Array<Maybe<Organization>>>;
  getUserByOrganization?: Maybe<Array<Maybe<User>>>;
};


export type QueryGetUserByOrganizationArgs = {
  organizationId: Scalars['ID']['input'];
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

export type UserAuth = {
  __typename?: 'UserAuth';
  error?: Maybe<Error>;
  response?: Maybe<UserWithToken>;
};

export type UserWithToken = {
  __typename?: 'UserWithToken';
  _id?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  organization?: Maybe<Scalars['String']['output']>;
  role?: Maybe<Role>;
  userJwtToken?: Maybe<JwtToken>;
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
  BoolAuth: ResolverTypeWrapper<BoolAuth>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  Error: ResolverTypeWrapper<Error>;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  InviteOrganizationInput: InviteOrganizationInput;
  InviteUserInput: InviteUserInput;
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
  UserAuth: ResolverTypeWrapper<UserAuth>;
  UserWithToken: ResolverTypeWrapper<UserWithToken>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  ActivateInput: ActivateInput;
  BoolAuth: BoolAuth;
  Boolean: Scalars['Boolean']['output'];
  Error: Error;
  ID: Scalars['ID']['output'];
  Int: Scalars['Int']['output'];
  InviteOrganizationInput: InviteOrganizationInput;
  InviteUserInput: InviteUserInput;
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
  UserAuth: UserAuth;
  UserWithToken: UserWithToken;
};

export type BoolAuthResolvers<ContextType = any, ParentType extends ResolversParentTypes['BoolAuth'] = ResolversParentTypes['BoolAuth']> = {
  error?: Resolver<Maybe<ResolversTypes['Error']>, ParentType, ContextType>;
  response?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ErrorResolvers<ContextType = any, ParentType extends ResolversParentTypes['Error'] = ResolversParentTypes['Error']> = {
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type JwtTokenResolvers<ContextType = any, ParentType extends ResolversParentTypes['JwtToken'] = ResolversParentTypes['JwtToken']> = {
  token?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  activateUser?: Resolver<Maybe<ResolversTypes['BoolAuth']>, ParentType, ContextType, RequireFields<MutationActivateUserArgs, 'input'>>;
  deleteOrganization?: Resolver<Maybe<ResolversTypes['BoolAuth']>, ParentType, ContextType, RequireFields<MutationDeleteOrganizationArgs, 'id'>>;
  deleteUser?: Resolver<Maybe<ResolversTypes['BoolAuth']>, ParentType, ContextType, RequireFields<MutationDeleteUserArgs, 'id'>>;
  inviteOrganization?: Resolver<Maybe<ResolversTypes['BoolAuth']>, ParentType, ContextType, RequireFields<MutationInviteOrganizationArgs, 'input'>>;
  inviteUser?: Resolver<Maybe<ResolversTypes['BoolAuth']>, ParentType, ContextType, RequireFields<MutationInviteUserArgs, 'input'>>;
  loginUser?: Resolver<Maybe<ResolversTypes['UserAuth']>, ParentType, ContextType, RequireFields<MutationLoginUserArgs, 'input'>>;
  registerOrganization?: Resolver<Maybe<ResolversTypes['BoolAuth']>, ParentType, ContextType, RequireFields<MutationRegisterOrganizationArgs, 'input'>>;
  resetPasswordUser?: Resolver<Maybe<ResolversTypes['BoolAuth']>, ParentType, ContextType, RequireFields<MutationResetPasswordUserArgs, 'input'>>;
  updateOrganizationStatus?: Resolver<Maybe<ResolversTypes['BoolAuth']>, ParentType, ContextType, RequireFields<MutationUpdateOrganizationStatusArgs, 'input'>>;
  updateUserRole?: Resolver<Maybe<ResolversTypes['BoolAuth']>, ParentType, ContextType, RequireFields<MutationUpdateUserRoleArgs, 'input'>>;
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
  getOrganizations?: Resolver<Maybe<Array<Maybe<ResolversTypes['Organization']>>>, ParentType, ContextType>;
  getUserByOrganization?: Resolver<Maybe<Array<Maybe<ResolversTypes['User']>>>, ParentType, ContextType, RequireFields<QueryGetUserByOrganizationArgs, 'organizationId'>>;
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

export type UserAuthResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserAuth'] = ResolversParentTypes['UserAuth']> = {
  error?: Resolver<Maybe<ResolversTypes['Error']>, ParentType, ContextType>;
  response?: Resolver<Maybe<ResolversTypes['UserWithToken']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserWithTokenResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserWithToken'] = ResolversParentTypes['UserWithToken']> = {
  _id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  organization?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  role?: Resolver<Maybe<ResolversTypes['Role']>, ParentType, ContextType>;
  userJwtToken?: Resolver<Maybe<ResolversTypes['JwtToken']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  BoolAuth?: BoolAuthResolvers<ContextType>;
  Error?: ErrorResolvers<ContextType>;
  JwtToken?: JwtTokenResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Organization?: OrganizationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
  UserAuth?: UserAuthResolvers<ContextType>;
  UserWithToken?: UserWithTokenResolvers<ContextType>;
};

