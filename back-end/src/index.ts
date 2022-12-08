import { ApolloServer } from 'apollo-server';
import { typeDefs } from './graphql';
import { resolvers } from './graphql';

const server = new ApolloServer({ 
  typeDefs, 
  resolvers,
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
