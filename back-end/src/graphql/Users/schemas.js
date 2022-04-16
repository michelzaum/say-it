const { gql } = require('apollo-server');

const typeDefs = gql`
  type User {
    id: ID!
    firstName: String
    lastName: String
    email: String
    password: String
    country: String
    codeToResetPassword: Int
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
    findUserByEmail(email: String): User
    validateCodeToResetPassword(email: String, codeProvided: Int): Boolean!
  }

  type Mutation {
    createUser(data: UserInput!): User
    updateUser(id: ID!, data: UserInput): User
    deleteUser(id: ID!): Boolean
    generateCodeToResetPassword(email: String): Boolean
  }
`;

module.exports = typeDefs;