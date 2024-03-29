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
    })
  }
`;

export const DELETE_POST = gql`
  mutation DeletePost($postId: ID!) {
    deletePost(id: $postId)
  }
`;
