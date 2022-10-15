import { gql } from '@apollo/client';

export const CREATE_USER = gql`
  mutation createUser(
    $firstNameValue: String!
    $lastNameValue: String!
    $emailValue: String!
    $passwordValue: String!
    $countryValue: String!
  ) {
    createUser(data: {
      first_name: $firstNameValue
      last_name: $lastNameValue
      email: $emailValue
      password: $passwordValue
      country: $countryValue
    })
  }
`;

export const UPDATE_USER_PASSWORD = gql`
  mutation updateUserPassword($email: String!, $newPassword: String!) {
    updateUserPassword(email: $email, newPassword: $newPassword)
  }
`;

export const GENERATE_CODE_TO_RESET_PASSWORD = gql`
  mutation generateCodeToResetPassword($email: String) {
    generateCodeToResetPassword(email: $email)
  }
`;