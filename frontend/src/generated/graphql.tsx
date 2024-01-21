import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
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

export type Count = {
  __typename?: 'Count';
  job?: Maybe<Scalars['Int']['output']>;
  resume?: Maybe<Scalars['Int']['output']>;
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
  forgotPassword?: Maybe<BoolAuth>;
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
  getCount?: Maybe<Count>;
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

export type RegisterOrganizationMutationVariables = Exact<{
  input: RegisterInput;
}>;


export type RegisterOrganizationMutation = { __typename?: 'Mutation', registerOrganization?: { __typename?: 'BoolAuth', response?: boolean | null } | null };

export type InviteOrganizationMutationVariables = Exact<{
  input: InviteOrganizationInput;
}>;


export type InviteOrganizationMutation = { __typename?: 'Mutation', inviteOrganization?: { __typename?: 'BoolAuth', response?: boolean | null } | null };

export type DeleteOrganizationMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type DeleteOrganizationMutation = { __typename?: 'Mutation', deleteOrganization?: { __typename?: 'BoolAuth', response?: boolean | null } | null };

export type UpdateOrganizationStatusMutationVariables = Exact<{
  input: UpdateStatusInput;
}>;


export type UpdateOrganizationStatusMutation = { __typename?: 'Mutation', updateOrganizationStatus?: { __typename?: 'BoolAuth', response?: boolean | null } | null };

export type InviteUserMutationVariables = Exact<{
  input: InviteUserInput;
}>;


export type InviteUserMutation = { __typename?: 'Mutation', inviteUser?: { __typename?: 'BoolAuth', response?: boolean | null } | null };

export type ForgotPasswordMutationVariables = Exact<{
  input: ForgotPasswordInput;
}>;


export type ForgotPasswordMutation = { __typename?: 'Mutation', forgotPassword?: { __typename?: 'BoolAuth', response?: boolean | null } | null };

export type ResetPasswordUserMutationVariables = Exact<{
  input: ResetPasswordInput;
}>;


export type ResetPasswordUserMutation = { __typename?: 'Mutation', resetPasswordUser?: { __typename?: 'BoolAuth', response?: boolean | null } | null };

export type ActivateUserMutationVariables = Exact<{
  input: ActivateInput;
}>;


export type ActivateUserMutation = { __typename?: 'Mutation', activateUser?: { __typename?: 'BoolAuth', response?: boolean | null } | null };

export type DeleteUserMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type DeleteUserMutation = { __typename?: 'Mutation', deleteUser?: { __typename?: 'BoolAuth', response?: boolean | null } | null };

export type UpdateUserRoleMutationVariables = Exact<{
  input: UpdateRoleInput;
}>;


export type UpdateUserRoleMutation = { __typename?: 'Mutation', updateUserRole?: { __typename?: 'BoolAuth', response?: boolean | null } | null };

export type LoginUserMutationVariables = Exact<{
  input: LoginInput;
}>;


export type LoginUserMutation = { __typename?: 'Mutation', loginUser?: { __typename?: 'UserAuth', response?: { __typename?: 'UserWithToken', userJwtToken?: { __typename?: 'JwtToken', token: string } | null } | null } | null };


export const RegisterOrganizationDocument = gql`
    mutation registerOrganization($input: RegisterInput!) {
  registerOrganization(input: $input) {
    response
  }
}
    `;
export type RegisterOrganizationMutationFn = Apollo.MutationFunction<RegisterOrganizationMutation, RegisterOrganizationMutationVariables>;

/**
 * __useRegisterOrganizationMutation__
 *
 * To run a mutation, you first call `useRegisterOrganizationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterOrganizationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerOrganizationMutation, { data, loading, error }] = useRegisterOrganizationMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useRegisterOrganizationMutation(baseOptions?: Apollo.MutationHookOptions<RegisterOrganizationMutation, RegisterOrganizationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RegisterOrganizationMutation, RegisterOrganizationMutationVariables>(RegisterOrganizationDocument, options);
      }
export type RegisterOrganizationMutationHookResult = ReturnType<typeof useRegisterOrganizationMutation>;
export type RegisterOrganizationMutationResult = Apollo.MutationResult<RegisterOrganizationMutation>;
export type RegisterOrganizationMutationOptions = Apollo.BaseMutationOptions<RegisterOrganizationMutation, RegisterOrganizationMutationVariables>;
export const InviteOrganizationDocument = gql`
    mutation inviteOrganization($input: InviteOrganizationInput!) {
  inviteOrganization(input: $input) {
    response
  }
}
    `;
export type InviteOrganizationMutationFn = Apollo.MutationFunction<InviteOrganizationMutation, InviteOrganizationMutationVariables>;

/**
 * __useInviteOrganizationMutation__
 *
 * To run a mutation, you first call `useInviteOrganizationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInviteOrganizationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [inviteOrganizationMutation, { data, loading, error }] = useInviteOrganizationMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useInviteOrganizationMutation(baseOptions?: Apollo.MutationHookOptions<InviteOrganizationMutation, InviteOrganizationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<InviteOrganizationMutation, InviteOrganizationMutationVariables>(InviteOrganizationDocument, options);
      }
export type InviteOrganizationMutationHookResult = ReturnType<typeof useInviteOrganizationMutation>;
export type InviteOrganizationMutationResult = Apollo.MutationResult<InviteOrganizationMutation>;
export type InviteOrganizationMutationOptions = Apollo.BaseMutationOptions<InviteOrganizationMutation, InviteOrganizationMutationVariables>;
export const DeleteOrganizationDocument = gql`
    mutation deleteOrganization($id: ID!) {
  deleteOrganization(id: $id) {
    response
  }
}
    `;
export type DeleteOrganizationMutationFn = Apollo.MutationFunction<DeleteOrganizationMutation, DeleteOrganizationMutationVariables>;

/**
 * __useDeleteOrganizationMutation__
 *
 * To run a mutation, you first call `useDeleteOrganizationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteOrganizationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteOrganizationMutation, { data, loading, error }] = useDeleteOrganizationMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteOrganizationMutation(baseOptions?: Apollo.MutationHookOptions<DeleteOrganizationMutation, DeleteOrganizationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteOrganizationMutation, DeleteOrganizationMutationVariables>(DeleteOrganizationDocument, options);
      }
export type DeleteOrganizationMutationHookResult = ReturnType<typeof useDeleteOrganizationMutation>;
export type DeleteOrganizationMutationResult = Apollo.MutationResult<DeleteOrganizationMutation>;
export type DeleteOrganizationMutationOptions = Apollo.BaseMutationOptions<DeleteOrganizationMutation, DeleteOrganizationMutationVariables>;
export const UpdateOrganizationStatusDocument = gql`
    mutation updateOrganizationStatus($input: UpdateStatusInput!) {
  updateOrganizationStatus(input: $input) {
    response
  }
}
    `;
export type UpdateOrganizationStatusMutationFn = Apollo.MutationFunction<UpdateOrganizationStatusMutation, UpdateOrganizationStatusMutationVariables>;

/**
 * __useUpdateOrganizationStatusMutation__
 *
 * To run a mutation, you first call `useUpdateOrganizationStatusMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateOrganizationStatusMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateOrganizationStatusMutation, { data, loading, error }] = useUpdateOrganizationStatusMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateOrganizationStatusMutation(baseOptions?: Apollo.MutationHookOptions<UpdateOrganizationStatusMutation, UpdateOrganizationStatusMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateOrganizationStatusMutation, UpdateOrganizationStatusMutationVariables>(UpdateOrganizationStatusDocument, options);
      }
export type UpdateOrganizationStatusMutationHookResult = ReturnType<typeof useUpdateOrganizationStatusMutation>;
export type UpdateOrganizationStatusMutationResult = Apollo.MutationResult<UpdateOrganizationStatusMutation>;
export type UpdateOrganizationStatusMutationOptions = Apollo.BaseMutationOptions<UpdateOrganizationStatusMutation, UpdateOrganizationStatusMutationVariables>;
export const InviteUserDocument = gql`
    mutation inviteUser($input: InviteUserInput!) {
  inviteUser(input: $input) {
    response
  }
}
    `;
export type InviteUserMutationFn = Apollo.MutationFunction<InviteUserMutation, InviteUserMutationVariables>;

/**
 * __useInviteUserMutation__
 *
 * To run a mutation, you first call `useInviteUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInviteUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [inviteUserMutation, { data, loading, error }] = useInviteUserMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useInviteUserMutation(baseOptions?: Apollo.MutationHookOptions<InviteUserMutation, InviteUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<InviteUserMutation, InviteUserMutationVariables>(InviteUserDocument, options);
      }
export type InviteUserMutationHookResult = ReturnType<typeof useInviteUserMutation>;
export type InviteUserMutationResult = Apollo.MutationResult<InviteUserMutation>;
export type InviteUserMutationOptions = Apollo.BaseMutationOptions<InviteUserMutation, InviteUserMutationVariables>;
export const ForgotPasswordDocument = gql`
    mutation forgotPassword($input: ForgotPasswordInput!) {
  forgotPassword(input: $input) {
    response
  }
}
    `;
export type ForgotPasswordMutationFn = Apollo.MutationFunction<ForgotPasswordMutation, ForgotPasswordMutationVariables>;

/**
 * __useForgotPasswordMutation__
 *
 * To run a mutation, you first call `useForgotPasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useForgotPasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [forgotPasswordMutation, { data, loading, error }] = useForgotPasswordMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useForgotPasswordMutation(baseOptions?: Apollo.MutationHookOptions<ForgotPasswordMutation, ForgotPasswordMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ForgotPasswordMutation, ForgotPasswordMutationVariables>(ForgotPasswordDocument, options);
      }
export type ForgotPasswordMutationHookResult = ReturnType<typeof useForgotPasswordMutation>;
export type ForgotPasswordMutationResult = Apollo.MutationResult<ForgotPasswordMutation>;
export type ForgotPasswordMutationOptions = Apollo.BaseMutationOptions<ForgotPasswordMutation, ForgotPasswordMutationVariables>;
export const ResetPasswordUserDocument = gql`
    mutation resetPasswordUser($input: ResetPasswordInput!) {
  resetPasswordUser(input: $input) {
    response
  }
}
    `;
export type ResetPasswordUserMutationFn = Apollo.MutationFunction<ResetPasswordUserMutation, ResetPasswordUserMutationVariables>;

/**
 * __useResetPasswordUserMutation__
 *
 * To run a mutation, you first call `useResetPasswordUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useResetPasswordUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [resetPasswordUserMutation, { data, loading, error }] = useResetPasswordUserMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useResetPasswordUserMutation(baseOptions?: Apollo.MutationHookOptions<ResetPasswordUserMutation, ResetPasswordUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ResetPasswordUserMutation, ResetPasswordUserMutationVariables>(ResetPasswordUserDocument, options);
      }
export type ResetPasswordUserMutationHookResult = ReturnType<typeof useResetPasswordUserMutation>;
export type ResetPasswordUserMutationResult = Apollo.MutationResult<ResetPasswordUserMutation>;
export type ResetPasswordUserMutationOptions = Apollo.BaseMutationOptions<ResetPasswordUserMutation, ResetPasswordUserMutationVariables>;
export const ActivateUserDocument = gql`
    mutation activateUser($input: ActivateInput!) {
  activateUser(input: $input) {
    response
  }
}
    `;
export type ActivateUserMutationFn = Apollo.MutationFunction<ActivateUserMutation, ActivateUserMutationVariables>;

/**
 * __useActivateUserMutation__
 *
 * To run a mutation, you first call `useActivateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useActivateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [activateUserMutation, { data, loading, error }] = useActivateUserMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useActivateUserMutation(baseOptions?: Apollo.MutationHookOptions<ActivateUserMutation, ActivateUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ActivateUserMutation, ActivateUserMutationVariables>(ActivateUserDocument, options);
      }
export type ActivateUserMutationHookResult = ReturnType<typeof useActivateUserMutation>;
export type ActivateUserMutationResult = Apollo.MutationResult<ActivateUserMutation>;
export type ActivateUserMutationOptions = Apollo.BaseMutationOptions<ActivateUserMutation, ActivateUserMutationVariables>;
export const DeleteUserDocument = gql`
    mutation deleteUser($id: ID!) {
  deleteUser(id: $id) {
    response
  }
}
    `;
export type DeleteUserMutationFn = Apollo.MutationFunction<DeleteUserMutation, DeleteUserMutationVariables>;

/**
 * __useDeleteUserMutation__
 *
 * To run a mutation, you first call `useDeleteUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteUserMutation, { data, loading, error }] = useDeleteUserMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteUserMutation(baseOptions?: Apollo.MutationHookOptions<DeleteUserMutation, DeleteUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteUserMutation, DeleteUserMutationVariables>(DeleteUserDocument, options);
      }
export type DeleteUserMutationHookResult = ReturnType<typeof useDeleteUserMutation>;
export type DeleteUserMutationResult = Apollo.MutationResult<DeleteUserMutation>;
export type DeleteUserMutationOptions = Apollo.BaseMutationOptions<DeleteUserMutation, DeleteUserMutationVariables>;
export const UpdateUserRoleDocument = gql`
    mutation updateUserRole($input: UpdateRoleInput!) {
  updateUserRole(input: $input) {
    response
  }
}
    `;
export type UpdateUserRoleMutationFn = Apollo.MutationFunction<UpdateUserRoleMutation, UpdateUserRoleMutationVariables>;

/**
 * __useUpdateUserRoleMutation__
 *
 * To run a mutation, you first call `useUpdateUserRoleMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserRoleMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserRoleMutation, { data, loading, error }] = useUpdateUserRoleMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateUserRoleMutation(baseOptions?: Apollo.MutationHookOptions<UpdateUserRoleMutation, UpdateUserRoleMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateUserRoleMutation, UpdateUserRoleMutationVariables>(UpdateUserRoleDocument, options);
      }
export type UpdateUserRoleMutationHookResult = ReturnType<typeof useUpdateUserRoleMutation>;
export type UpdateUserRoleMutationResult = Apollo.MutationResult<UpdateUserRoleMutation>;
export type UpdateUserRoleMutationOptions = Apollo.BaseMutationOptions<UpdateUserRoleMutation, UpdateUserRoleMutationVariables>;
export const LoginUserDocument = gql`
    mutation loginUser($input: LoginInput!) {
  loginUser(input: $input) {
    response {
      userJwtToken {
        token
      }
    }
  }
}
    `;
export type LoginUserMutationFn = Apollo.MutationFunction<LoginUserMutation, LoginUserMutationVariables>;

/**
 * __useLoginUserMutation__
 *
 * To run a mutation, you first call `useLoginUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginUserMutation, { data, loading, error }] = useLoginUserMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useLoginUserMutation(baseOptions?: Apollo.MutationHookOptions<LoginUserMutation, LoginUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginUserMutation, LoginUserMutationVariables>(LoginUserDocument, options);
      }
export type LoginUserMutationHookResult = ReturnType<typeof useLoginUserMutation>;
export type LoginUserMutationResult = Apollo.MutationResult<LoginUserMutation>;
export type LoginUserMutationOptions = Apollo.BaseMutationOptions<LoginUserMutation, LoginUserMutationVariables>;