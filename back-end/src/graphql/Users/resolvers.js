const UserRepository = require('../../repositories/UserRepository');
const generateRandomCode = require('../../utils/generateRandomCode');

module.exports = {
  Query: {
    listUsers: async () => {
      try {
        return await UserRepository.findAll();
      } catch (err) {
        console.log(err);
      }
    },

    findUserById: async (_, { id }) => {
      try {
        if (id) {
          return await UserRepository.findUserById(Number(id));
        }
      } catch (err) {
        console.log(err);
      }
    },

    findUserByEmail: async (_, { email }) => {
      try {
        if (email) {
          const userByEmail = await UserRepository.findUserByEmail(email);

          return userByEmail;
        };
      } catch (err) {
        console.log(err);
      }
    },
  },

  Mutation: {
    createUser: async (_, { data }) => {
      try {
        const { firstName, email, password } = data;
  
        if([firstName, email, password].some((item) => !item)) {
          return 'There are empty required fields';
        }
  
        const newUser = await UserRepository.create(data);
        return newUser;
      } catch (err) {
        console.log(err);
      };
    },

    updateUser: async (_, { id, data }) => {
      try {
        const updatedUser = await UserRepository.update(Number(id), data);
        return updatedUser;
      } catch (err) {
        console.log(err);
      };
    },

    deleteUser: async (_, { id }) => {
      try {
        return await UserRepository.delete(Number(id))
      } catch (err) {
        console.log(err);
      };
    },

    updateUserResetPasswordCode: async (_, { id }) => {
      try {
        const randomCode = generateRandomCode();
        
        const userToResetPassword = await UserRepository.updateResetPasswordCode(id, randomCode);
        return userToResetPassword;
      } catch (err) {
        console.log(err);
      };
    },
  },
};