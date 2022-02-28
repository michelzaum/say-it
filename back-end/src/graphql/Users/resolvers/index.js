const UserRepository = require('../../../repositories/UserRepository');

module.exports = {
  Query: {
    listUsers: async() => await UserRepository.findAll(),
    findUserById: async(_, { id }) => await UserRepository.findUserById(id),
  },

  Mutation: {
    createUser: async(_, { data }) => {
      const { firstName, email, password } = data;

      if([firstName, email, password].some((item) => !item)) {
        console.log('There are empty required fields');
        return;
      }

      const newUser = await UserRepository.create(data);
      return newUser;
    },
    updateUser: async(_, { id, data }) => await UserRepository.update(Number(id), data),
    deleteUser: async(_, { id }) => await UserRepository.delete(Number(id)),
  }
}