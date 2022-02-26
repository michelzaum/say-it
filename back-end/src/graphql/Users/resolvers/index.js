const UserRepository = require('../../../repositories/UserRepository');

module.exports = {
  Query: {
    listUsers: async() => await UserRepository.findAll(),
    findUserById: async(_, { id }) => await UserRepository.findUserById(id),
  },

  Mutation: {
    createUser: async(_, { data }) => await UserRepository.create(data),
    updateUser: async(_, { id, data }) => await UserRepository.update(Number(id), data),
    deleteUser: async(_, { id }) => await UserRepository.delete(Number(id)),
  }
}