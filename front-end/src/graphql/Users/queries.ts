import { gql } from '@apollo/client';

export const FIND_USER_BY_EMAIL = gql`
  query findUserByEmail($email: String) {
    findUserByEmail(email: $email) {
      email
    }
  }
`;

export const VALIDATE_CODE_TO_RESET_PASSWORD = gql`
  query validateCodeToResetPassword($email: String, $codeProvided: Int) {
    isCodeProvidedValid(email: $email, codeProvided: $codeProvided)
  }
`;

export const LOGIN = gql`
  query login($email: String, $passwordProvided: String) {
    login(email: $email, passwordProvided: $passwordProvided)
  }
`;