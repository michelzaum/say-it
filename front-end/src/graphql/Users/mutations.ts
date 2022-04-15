import { gql } from '@apollo/client';

export const CREATE_USER = gql`
  mutation createUser(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
    $country: String!
  ) {
    createUser(data: {
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
      country: $country
    }) {
      firstName
      lastName
      email
    }
  }
`;

export const UPDATE_USER_PASSWORD = gql`
  mutation UpdateUser($userId: ID!, $newPassword: String!) {
    updateUser(id: $userId, data: {
      password: $newPassword
    }) {
      id
      email
      password
    }
  }
`;

export const GENERATE_CODE_TO_RESET_PASSWORD = gql`
  mutation UpdateUserResetPasswordCode($id: ID) {
    updateUserResetPasswordCode(id: $id) {
      codeToResetPassword
    }
  }
`;