const { ApolloServer } = require('apollo-server');
const typeDefs = require('./graphql/Users/schemas');
const { resolvers } =require('./graphql/Users/resolvers');

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
