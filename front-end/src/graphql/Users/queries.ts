import { gql } from '@apollo/client';

export const FIND_USER_BY_EMAIL = gql`
  query findUserByEmail($email: String) {
    findUserByEmail(email: $email) {
      email
    }
  }
`;