const userSchema = require('./Users/schemas');
const postSchema = require('./Posts/schemas');

const typeDefs = [userSchema, postSchema];

module.exports = { 
  typeDefs
};