import { gql } from '@apollo/client';

export const GET_POSTS = gql`
query Posts {
  posts {
    id
    createdAt
    content
    author {
      id
      first_name
      last_name
      email
      country
    }
  }
}
`;
