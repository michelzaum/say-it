import { gql } from '@apollo/client';

export const GET_POSTS = gql`
query Posts {
  posts {
    id
    createdAt
    content
    author {
      user_id
      first_name
      last_name
      email
      country
    }
  }
}
`;
