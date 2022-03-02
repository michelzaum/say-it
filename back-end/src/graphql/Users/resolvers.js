const UserRepository = require('../../repositories/UserRepository');

module.exports = {
  Query: {
    listUsers: async() => await UserRepository.findAll(),
    findUserById: async(_, { id }) => await UserRepository.findUserById(id),
  },

  Mutation: {
    createUser: async(_, { data }) => {
      const { firstName, email, password } = data;

      if([firstName, email, password].some((item) => !item)) {
        return 'There are empty required fields';
      }

      const newUser = await UserRepository.create(data);
      return newUser;
    },

    updateUser: async(_, { id, data }) => {
      const updatedUser = await UserRepository.update(Number(id), data);
      return updatedUser;
    },

    deleteUser: async(_, { id }) => await UserRepository.delete(Number(id)),
  }
}