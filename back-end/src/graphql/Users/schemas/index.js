const { gql } = require('apollo-server');

const typeDefs = gql`
  type User {
    id: ID!
    firstName: String
    lastName: String
    email: String
    password: String
    country: String
  }

  input UserInput {
    firstName: String
    lastName: String
    email: String
    password: String
    country: String
  }

  type Query {
    listUsers: [User!]
    findUserById(id: ID!): User!
  }

  type Mutation {
    createUser(data: UserInput!): User
    updateUser(id: ID!, data: UserInput): [User]
    deleteUser(id: ID!): Boolean
  }
`;

module.exports = typeDefs;