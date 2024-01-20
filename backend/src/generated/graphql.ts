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

export type Mutation = {
  __typename?: 'Mutation';
  createOrganization?: Maybe<Organization>;
  createRecord?: Maybe<Record>;
  createUser?: Maybe<User>;
  deleteOrganization?: Maybe<Scalars['Boolean']['output']>;
  deleteRecord?: Maybe<Scalars['Boolean']['output']>;
  deleteUser?: Maybe<Scalars['Boolean']['output']>;
  updateOrganization?: Maybe<Organization>;
  updateRecord?: Maybe<Record>;
  updateUser?: Maybe<User>;
};


export type MutationCreateOrganizationArgs = {
  input: OrganizationInput;
};


export type MutationCreateRecordArgs = {
  level?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  position?: InputMaybe<Scalars['String']['input']>;
};


export type MutationCreateUserArgs = {
  input: UserInput;
};


export type MutationDeleteOrganizationArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteRecordArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUserArgs = {
  id: Scalars['ID']['input'];
};


export type MutationUpdateOrganizationArgs = {
  id: Scalars['ID']['input'];
  input: OrganizationInput;
};


export type MutationUpdateRecordArgs = {
  id: Scalars['ID']['input'];
  level?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  position?: InputMaybe<Scalars['String']['input']>;
};


export type MutationUpdateUserArgs = {
  id: Scalars['ID']['input'];
  input: UserInput;
};

export type Organization = {
  __typename?: 'Organization';
  email?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Status>;
  url?: Maybe<Scalars['String']['output']>;
};

export type OrganizationInput = {
  email: Scalars['String']['input'];
  name: Scalars['String']['input'];
  status: Status;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type Query = {
  __typename?: 'Query';
  getOrganization?: Maybe<Organization>;
  getOrganizationByName?: Maybe<Organization>;
  getUser?: Maybe<User>;
  getUserByEmail?: Maybe<User>;
  getUserByOrganization?: Maybe<Array<Maybe<User>>>;
  record?: Maybe<Record>;
  records?: Maybe<Array<Maybe<Record>>>;
};


export type QueryGetOrganizationArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetOrganizationByNameArgs = {
  email: Scalars['String']['input'];
  name: Scalars['String']['input'];
};


export type QueryGetUserArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetUserByEmailArgs = {
  email: Scalars['String']['input'];
  organizationId: Scalars['ID']['input'];
};


export type QueryGetUserByOrganizationArgs = {
  organizationId: Scalars['ID']['input'];
};


export type QueryRecordArgs = {
  id: Scalars['ID']['input'];
};

export type Record = {
  __typename?: 'Record';
  id?: Maybe<Scalars['ID']['output']>;
  level?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  position?: Maybe<Scalars['String']['output']>;
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

export type User = {
  __typename?: 'User';
  email?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  organization?: Maybe<Organization>;
  password?: Maybe<Scalars['String']['output']>;
  role?: Maybe<Role>;
};

export type UserInput = {
  email: Scalars['String']['input'];
  organization: OrganizationInput;
  password: Scalars['String']['input'];
  role: Role;
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
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  Mutation: ResolverTypeWrapper<{}>;
  Organization: ResolverTypeWrapper<Organization>;
  OrganizationInput: OrganizationInput;
  Query: ResolverTypeWrapper<{}>;
  Record: ResolverTypeWrapper<Record>;
  Role: Role;
  Status: Status;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  User: ResolverTypeWrapper<User>;
  UserInput: UserInput;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars['Boolean']['output'];
  ID: Scalars['ID']['output'];
  Mutation: {};
  Organization: Organization;
  OrganizationInput: OrganizationInput;
  Query: {};
  Record: Record;
  String: Scalars['String']['output'];
  User: User;
  UserInput: UserInput;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  createOrganization?: Resolver<Maybe<ResolversTypes['Organization']>, ParentType, ContextType, RequireFields<MutationCreateOrganizationArgs, 'input'>>;
  createRecord?: Resolver<Maybe<ResolversTypes['Record']>, ParentType, ContextType, RequireFields<MutationCreateRecordArgs, 'name'>>;
  createUser?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<MutationCreateUserArgs, 'input'>>;
  deleteOrganization?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<MutationDeleteOrganizationArgs, 'id'>>;
  deleteRecord?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<MutationDeleteRecordArgs, 'id'>>;
  deleteUser?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<MutationDeleteUserArgs, 'id'>>;
  updateOrganization?: Resolver<Maybe<ResolversTypes['Organization']>, ParentType, ContextType, RequireFields<MutationUpdateOrganizationArgs, 'id' | 'input'>>;
  updateRecord?: Resolver<Maybe<ResolversTypes['Record']>, ParentType, ContextType, RequireFields<MutationUpdateRecordArgs, 'id'>>;
  updateUser?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<MutationUpdateUserArgs, 'id' | 'input'>>;
};

export type OrganizationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Organization'] = ResolversParentTypes['Organization']> = {
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['Status']>, ParentType, ContextType>;
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  getOrganization?: Resolver<Maybe<ResolversTypes['Organization']>, ParentType, ContextType, RequireFields<QueryGetOrganizationArgs, 'id'>>;
  getOrganizationByName?: Resolver<Maybe<ResolversTypes['Organization']>, ParentType, ContextType, RequireFields<QueryGetOrganizationByNameArgs, 'email' | 'name'>>;
  getUser?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QueryGetUserArgs, 'id'>>;
  getUserByEmail?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QueryGetUserByEmailArgs, 'email' | 'organizationId'>>;
  getUserByOrganization?: Resolver<Maybe<Array<Maybe<ResolversTypes['User']>>>, ParentType, ContextType, RequireFields<QueryGetUserByOrganizationArgs, 'organizationId'>>;
  record?: Resolver<Maybe<ResolversTypes['Record']>, ParentType, ContextType, RequireFields<QueryRecordArgs, 'id'>>;
  records?: Resolver<Maybe<Array<Maybe<ResolversTypes['Record']>>>, ParentType, ContextType>;
};

export type RecordResolvers<ContextType = any, ParentType extends ResolversParentTypes['Record'] = ResolversParentTypes['Record']> = {
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  level?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  position?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  organization?: Resolver<Maybe<ResolversTypes['Organization']>, ParentType, ContextType>;
  password?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  role?: Resolver<Maybe<ResolversTypes['Role']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Mutation?: MutationResolvers<ContextType>;
  Organization?: OrganizationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Record?: RecordResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
};

