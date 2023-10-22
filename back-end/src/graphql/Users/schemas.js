const { gql } = require('apollo-server');

const typeDefs = gql`
  type User {
    user_id: ID!
    first_name: String
    last_name: String
    email: String
    password: String
    country: String
    is_active: Boolean
    bio: String
    code_to_reset_password: Int
    github: String
    linkedin: String
  }

  input UserInput {
    first_name: String
    last_name: String
    email: String
    password: String
    country: String
  }

  type Query {
    listUsers: [User!]
    findUserById(id: ID!): User!
    findUserByEmail(email: String): User!
    isCodeProvidedValid(email: String, codeProvided: Int): Boolean!
    login(email: String, passwordProvided: String) : Boolean!
  }

  type Mutation {
    createUser(data: UserInput!): Boolean
    updateUser(id: ID!, data: UserInput): User
    deleteUser(id: ID!): Boolean
    generateCodeToResetPassword(email: String): Boolean
    updateUserPassword(email: String, newPassword: String): Boolean
  }
`;

module.exports = typeDefs;