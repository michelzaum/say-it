const userSchema = require('./Users/schemas');
const postSchema = require('./Posts/schemas');
const userResolver = require('./Users/resolvers');
const postResolver = require('./Posts/resolvers');

const typeDefs = [userSchema, postSchema];
const resolvers = [userResolver, postResolver];

module.exports = { 
  typeDefs,
  resolvers,
};