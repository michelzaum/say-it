const { gql } = require('apollo-server');

const typeDefs = gql`
  type User {
    id: String
    firstName: String
    lastName: String
    email: String
    password: String
  }

  type Query {
    listUsers: [User!]
    findUserById(id: String): User!
  }

  input UserInput {
    firstName: String
    lastName: String
    email: String
    password: String
  }

  type Mutation {
    createUser(data: UserInput!): User
    updateUser(data: UserInput!): User
    deleteUser(id: String): Boolean
  }
`;

module.exports = typeDefs;