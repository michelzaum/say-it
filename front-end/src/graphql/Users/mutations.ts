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
  mutation updateUserPassword($email: String!, $newPassword: String!) {
    updateUserPassword(email: $email, newPassword: $newPassword) {
      id
      firstName
      email
    }
  }
`;

export const GENERATE_CODE_TO_RESET_PASSWORD = gql`
  mutation generateCodeToResetPassword($email: String) {
    generateCodeToResetPassword(email: $email)
  }
`;