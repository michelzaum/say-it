import { gql } from '@apollo/client';

export const CREATE_POST = gql`
  mutation Posts(
    $content: String!
    $authorId: ID!
    $createdAt: String
  ) {
    createPost(data: {
      content: $content
      authorId: $authorId
      createdAt: $createdAt
    }) {
      id
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
