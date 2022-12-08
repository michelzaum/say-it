import { userSchema } from'./Users/schemas';
import { postSchema } from './Posts/schemas';
import { userResolver } from './Users/resolvers';
import { postResolver } from './Posts/resolvers';

const typeDefs = [userSchema, postSchema];
const resolvers = [userResolver, postResolver];

export {
  typeDefs,
  resolvers,
};
