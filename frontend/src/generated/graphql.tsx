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

export type Candidate = {
  __typename?: 'Candidate';
  candidate_age?: Maybe<Scalars['String']['output']>;
  country?: Maybe<Scalars['String']['output']>;
  current_address?: Maybe<Scalars['String']['output']>;
  date_of_birth?: Maybe<Scalars['String']['output']>;
  education?: Maybe<Array<Maybe<Education>>>;
  email?: Maybe<Scalars['String']['output']>;
  employer_id?: Maybe<Scalars['String']['output']>;
  file_name?: Maybe<Scalars['String']['output']>;
  first_name?: Maybe<Scalars['String']['output']>;
  fresher?: Maybe<Scalars['String']['output']>;
  gender?: Maybe<Scalars['String']['output']>;
  job_code_title?: Maybe<Scalars['String']['output']>;
  job_id?: Maybe<Scalars['String']['output']>;
  languages?: Maybe<Scalars['String']['output']>;
  last_name?: Maybe<Scalars['String']['output']>;
  permanent_address?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  total_work_experience?: Maybe<Scalars['Int']['output']>;
  work_experience?: Maybe<Array<Maybe<Work>>>;
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

export type RegisterOrganizationMutationVariables = Exact<{
  input: RegisterInput;
}>;


export type RegisterOrganizationMutation = { __typename?: 'Mutation', registerOrganization?: boolean | null };

export type InviteOrganizationMutationVariables = Exact<{
  input: InviteOrganizationInput;
}>;


export type InviteOrganizationMutation = { __typename?: 'Mutation', inviteOrganization?: boolean | null };

export type DeleteOrganizationMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type DeleteOrganizationMutation = { __typename?: 'Mutation', deleteOrganization?: boolean | null };

export type UpdateOrganizationStatusMutationVariables = Exact<{
  input: UpdateStatusInput;
}>;


export type UpdateOrganizationStatusMutation = { __typename?: 'Mutation', updateOrganizationStatus?: boolean | null };

export type InviteUserMutationVariables = Exact<{
  input: InviteUserInput;
}>;


export type InviteUserMutation = { __typename?: 'Mutation', inviteUser?: boolean | null };

export type ForgotPasswordMutationVariables = Exact<{
  input: ForgotPasswordInput;
}>;


export type ForgotPasswordMutation = { __typename?: 'Mutation', forgotPassword?: boolean | null };

export type ResetPasswordUserMutationVariables = Exact<{
  input: ResetPasswordInput;
}>;


export type ResetPasswordUserMutation = { __typename?: 'Mutation', resetPasswordUser?: boolean | null };

export type ActivateUserMutationVariables = Exact<{
  input: ActivateInput;
}>;


export type ActivateUserMutation = { __typename?: 'Mutation', activateUser?: boolean | null };

export type DeleteUserMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type DeleteUserMutation = { __typename?: 'Mutation', deleteUser?: boolean | null };

export type UpdateUserRoleMutationVariables = Exact<{
  input: UpdateRoleInput;
}>;


export type UpdateUserRoleMutation = { __typename?: 'Mutation', updateUserRole?: boolean | null };

export type LoginUserMutationVariables = Exact<{
  input: LoginInput;
}>;


export type LoginUserMutation = { __typename?: 'Mutation', loginUser?: { __typename?: 'UserWithToken', userJwtToken?: { __typename?: 'JwtToken', token: string } | null } | null };

export type GetUserDataQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUserDataQuery = { __typename?: 'Query', getUserData?: { __typename?: 'UserData', _id?: string | null, name?: string | null, email?: string | null, role?: Role | null, organization?: { __typename?: 'Organization', _id?: string | null, name?: string | null, email?: string | null, url?: string | null, status?: Status | null } | null } | null };

export type GetCountQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCountQuery = { __typename?: 'Query', getCount?: { __typename?: 'Count', resume?: number | null, job?: number | null } | null };

export type GetJobsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetJobsQuery = { __typename?: 'Query', getJobs?: Array<{ __typename?: 'Job', description?: string | null, job_id?: string | null, job_code_title?: string | null } | null> | null };

export type GetJobQueryVariables = Exact<{
  query?: InputMaybe<Scalars['String']['input']>;
}>;


export type GetJobQuery = { __typename?: 'Query', getJob?: Array<{ __typename?: 'Job', description?: string | null, job_id?: string | null, job_code_title?: string | null } | null> | null };

export type GetUserByOrganizationQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUserByOrganizationQuery = { __typename?: 'Query', getUserByOrganization?: Array<{ __typename?: 'User', _id?: string | null, name: string, email?: string | null, password?: string | null, role?: Role | null, organization?: string | null } | null> | null };

export type GetOrganizationsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetOrganizationsQuery = { __typename?: 'Query', getOrganizations?: Array<{ __typename?: 'Organization', _id?: string | null, name?: string | null, email?: string | null, url?: string | null, status?: Status | null } | null> | null };

export type GetCandidateQueryVariables = Exact<{
  query?: InputMaybe<CandidateQuery>;
  page?: InputMaybe<Scalars['Int']['input']>;
}>;


export type GetCandidateQuery = { __typename?: 'Query', getCandidate?: Array<{ __typename?: 'Candidate', first_name?: string | null, last_name?: string | null, email?: string | null, phone?: string | null, date_of_birth?: string | null, candidate_age?: string | null, current_address?: string | null, permanent_address?: string | null, country?: string | null, total_work_experience?: number | null, employer_id?: string | null, file_name?: string | null, fresher?: string | null, gender?: string | null, job_code_title?: string | null, job_id?: string | null, languages?: string | null, work_experience?: Array<{ __typename?: 'Work', company?: string | null, designation?: string | null, date_of_joining?: string | null, date_of_leaving?: string | null } | null> | null, education?: Array<{ __typename?: 'Education', degree_name?: string | null, degree_type?: string | null, institute_name?: string | null } | null> | null } | null> | null };


export const RegisterOrganizationDocument = gql`
    mutation registerOrganization($input: RegisterInput!) {
  registerOrganization(input: $input)
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
  inviteOrganization(input: $input)
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
  deleteOrganization(id: $id)
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
  updateOrganizationStatus(input: $input)
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
  inviteUser(input: $input)
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
  forgotPassword(input: $input)
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
  resetPasswordUser(input: $input)
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
  activateUser(input: $input)
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
  deleteUser(id: $id)
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
  updateUserRole(input: $input)
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
    userJwtToken {
      token
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
export const GetUserDataDocument = gql`
    query getUserData {
  getUserData {
    _id
    name
    email
    role
    organization {
      _id
      name
      email
      url
      status
    }
  }
}
    `;

/**
 * __useGetUserDataQuery__
 *
 * To run a query within a React component, call `useGetUserDataQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserDataQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserDataQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetUserDataQuery(baseOptions?: Apollo.QueryHookOptions<GetUserDataQuery, GetUserDataQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserDataQuery, GetUserDataQueryVariables>(GetUserDataDocument, options);
      }
export function useGetUserDataLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserDataQuery, GetUserDataQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserDataQuery, GetUserDataQueryVariables>(GetUserDataDocument, options);
        }
export function useGetUserDataSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetUserDataQuery, GetUserDataQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetUserDataQuery, GetUserDataQueryVariables>(GetUserDataDocument, options);
        }
export type GetUserDataQueryHookResult = ReturnType<typeof useGetUserDataQuery>;
export type GetUserDataLazyQueryHookResult = ReturnType<typeof useGetUserDataLazyQuery>;
export type GetUserDataSuspenseQueryHookResult = ReturnType<typeof useGetUserDataSuspenseQuery>;
export type GetUserDataQueryResult = Apollo.QueryResult<GetUserDataQuery, GetUserDataQueryVariables>;
export const GetCountDocument = gql`
    query getCount {
  getCount {
    resume
    job
  }
}
    `;

/**
 * __useGetCountQuery__
 *
 * To run a query within a React component, call `useGetCountQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCountQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCountQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetCountQuery(baseOptions?: Apollo.QueryHookOptions<GetCountQuery, GetCountQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCountQuery, GetCountQueryVariables>(GetCountDocument, options);
      }
export function useGetCountLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCountQuery, GetCountQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCountQuery, GetCountQueryVariables>(GetCountDocument, options);
        }
export function useGetCountSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetCountQuery, GetCountQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetCountQuery, GetCountQueryVariables>(GetCountDocument, options);
        }
export type GetCountQueryHookResult = ReturnType<typeof useGetCountQuery>;
export type GetCountLazyQueryHookResult = ReturnType<typeof useGetCountLazyQuery>;
export type GetCountSuspenseQueryHookResult = ReturnType<typeof useGetCountSuspenseQuery>;
export type GetCountQueryResult = Apollo.QueryResult<GetCountQuery, GetCountQueryVariables>;
export const GetJobsDocument = gql`
    query getJobs {
  getJobs {
    description
    job_id
    job_code_title
  }
}
    `;

/**
 * __useGetJobsQuery__
 *
 * To run a query within a React component, call `useGetJobsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetJobsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetJobsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetJobsQuery(baseOptions?: Apollo.QueryHookOptions<GetJobsQuery, GetJobsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetJobsQuery, GetJobsQueryVariables>(GetJobsDocument, options);
      }
export function useGetJobsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetJobsQuery, GetJobsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetJobsQuery, GetJobsQueryVariables>(GetJobsDocument, options);
        }
export function useGetJobsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetJobsQuery, GetJobsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetJobsQuery, GetJobsQueryVariables>(GetJobsDocument, options);
        }
export type GetJobsQueryHookResult = ReturnType<typeof useGetJobsQuery>;
export type GetJobsLazyQueryHookResult = ReturnType<typeof useGetJobsLazyQuery>;
export type GetJobsSuspenseQueryHookResult = ReturnType<typeof useGetJobsSuspenseQuery>;
export type GetJobsQueryResult = Apollo.QueryResult<GetJobsQuery, GetJobsQueryVariables>;
export const GetJobDocument = gql`
    query getJob($query: String) {
  getJob(query: $query) {
    description
    job_id
    job_code_title
  }
}
    `;

/**
 * __useGetJobQuery__
 *
 * To run a query within a React component, call `useGetJobQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetJobQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetJobQuery({
 *   variables: {
 *      query: // value for 'query'
 *   },
 * });
 */
export function useGetJobQuery(baseOptions?: Apollo.QueryHookOptions<GetJobQuery, GetJobQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetJobQuery, GetJobQueryVariables>(GetJobDocument, options);
      }
export function useGetJobLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetJobQuery, GetJobQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetJobQuery, GetJobQueryVariables>(GetJobDocument, options);
        }
export function useGetJobSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetJobQuery, GetJobQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetJobQuery, GetJobQueryVariables>(GetJobDocument, options);
        }
export type GetJobQueryHookResult = ReturnType<typeof useGetJobQuery>;
export type GetJobLazyQueryHookResult = ReturnType<typeof useGetJobLazyQuery>;
export type GetJobSuspenseQueryHookResult = ReturnType<typeof useGetJobSuspenseQuery>;
export type GetJobQueryResult = Apollo.QueryResult<GetJobQuery, GetJobQueryVariables>;
export const GetUserByOrganizationDocument = gql`
    query getUserByOrganization {
  getUserByOrganization {
    _id
    name
    email
    password
    role
    organization
  }
}
    `;

/**
 * __useGetUserByOrganizationQuery__
 *
 * To run a query within a React component, call `useGetUserByOrganizationQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserByOrganizationQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserByOrganizationQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetUserByOrganizationQuery(baseOptions?: Apollo.QueryHookOptions<GetUserByOrganizationQuery, GetUserByOrganizationQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserByOrganizationQuery, GetUserByOrganizationQueryVariables>(GetUserByOrganizationDocument, options);
      }
export function useGetUserByOrganizationLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserByOrganizationQuery, GetUserByOrganizationQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserByOrganizationQuery, GetUserByOrganizationQueryVariables>(GetUserByOrganizationDocument, options);
        }
export function useGetUserByOrganizationSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetUserByOrganizationQuery, GetUserByOrganizationQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetUserByOrganizationQuery, GetUserByOrganizationQueryVariables>(GetUserByOrganizationDocument, options);
        }
export type GetUserByOrganizationQueryHookResult = ReturnType<typeof useGetUserByOrganizationQuery>;
export type GetUserByOrganizationLazyQueryHookResult = ReturnType<typeof useGetUserByOrganizationLazyQuery>;
export type GetUserByOrganizationSuspenseQueryHookResult = ReturnType<typeof useGetUserByOrganizationSuspenseQuery>;
export type GetUserByOrganizationQueryResult = Apollo.QueryResult<GetUserByOrganizationQuery, GetUserByOrganizationQueryVariables>;
export const GetOrganizationsDocument = gql`
    query getOrganizations {
  getOrganizations {
    _id
    name
    email
    url
    status
  }
}
    `;

/**
 * __useGetOrganizationsQuery__
 *
 * To run a query within a React component, call `useGetOrganizationsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetOrganizationsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetOrganizationsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetOrganizationsQuery(baseOptions?: Apollo.QueryHookOptions<GetOrganizationsQuery, GetOrganizationsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetOrganizationsQuery, GetOrganizationsQueryVariables>(GetOrganizationsDocument, options);
      }
export function useGetOrganizationsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetOrganizationsQuery, GetOrganizationsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetOrganizationsQuery, GetOrganizationsQueryVariables>(GetOrganizationsDocument, options);
        }
export function useGetOrganizationsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetOrganizationsQuery, GetOrganizationsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetOrganizationsQuery, GetOrganizationsQueryVariables>(GetOrganizationsDocument, options);
        }
export type GetOrganizationsQueryHookResult = ReturnType<typeof useGetOrganizationsQuery>;
export type GetOrganizationsLazyQueryHookResult = ReturnType<typeof useGetOrganizationsLazyQuery>;
export type GetOrganizationsSuspenseQueryHookResult = ReturnType<typeof useGetOrganizationsSuspenseQuery>;
export type GetOrganizationsQueryResult = Apollo.QueryResult<GetOrganizationsQuery, GetOrganizationsQueryVariables>;
export const GetCandidateDocument = gql`
    query getCandidate($query: CandidateQuery, $page: Int) {
  getCandidate(query: $query, page: $page) {
    first_name
    last_name
    email
    phone
    date_of_birth
    candidate_age
    current_address
    permanent_address
    country
    total_work_experience
    work_experience {
      company
      designation
      date_of_joining
      date_of_leaving
    }
    education {
      degree_name
      degree_type
      institute_name
    }
    employer_id
    file_name
    fresher
    gender
    job_code_title
    job_id
    languages
  }
}
    `;

/**
 * __useGetCandidateQuery__
 *
 * To run a query within a React component, call `useGetCandidateQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCandidateQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCandidateQuery({
 *   variables: {
 *      query: // value for 'query'
 *      page: // value for 'page'
 *   },
 * });
 */
export function useGetCandidateQuery(baseOptions?: Apollo.QueryHookOptions<GetCandidateQuery, GetCandidateQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCandidateQuery, GetCandidateQueryVariables>(GetCandidateDocument, options);
      }
export function useGetCandidateLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCandidateQuery, GetCandidateQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCandidateQuery, GetCandidateQueryVariables>(GetCandidateDocument, options);
        }
export function useGetCandidateSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetCandidateQuery, GetCandidateQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetCandidateQuery, GetCandidateQueryVariables>(GetCandidateDocument, options);
        }
export type GetCandidateQueryHookResult = ReturnType<typeof useGetCandidateQuery>;
export type GetCandidateLazyQueryHookResult = ReturnType<typeof useGetCandidateLazyQuery>;
export type GetCandidateSuspenseQueryHookResult = ReturnType<typeof useGetCandidateSuspenseQuery>;
export type GetCandidateQueryResult = Apollo.QueryResult<GetCandidateQuery, GetCandidateQueryVariables>;