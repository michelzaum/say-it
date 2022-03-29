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