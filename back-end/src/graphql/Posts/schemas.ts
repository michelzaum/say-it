import { gql } from 'apollo-server';

export const postSchema = gql`
  type Post {
    id: ID!
    author: User!
    createdAt: String
    content: String!
  }

  type Query {
    posts: [Post!]!
  }

  input PostInput {
    createdAt: String
    content: String!
    authorId: ID!
  }

  type Mutation {
    createPost(data: PostInput): Post!
    deletePost(id: ID!): Boolean
  }
`;
