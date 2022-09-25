const UserRepository = require('../../repositories/UserRepository');
const generateRandomCode = require('../../utils/generateRandomCode');
const sendEmailToResetPassword = require('../../utils/sendEmail');
const encryption = require('../../utils/encryption');
const decryption = require('../../utils/decryption');

module.exports = {
  Query: {
    listUsers: async () => {
      try {
        const allUsers = await UserRepository.findAll();
        return allUsers;
      } catch (err) {
        console.log(err);
      };
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

    isCodeProvidedValid: async(_, { email, codeProvided }) => {
      try {
        const codeIsValid = await UserRepository.isCodeProvidedValid(email, codeProvided);
        return !!codeIsValid;
      } catch (err) {
        console.log(err);
      };
    },

    login: async (_, { email, passwordProvided }) => {
      try {
        const user = await UserRepository.findUserByEmail(email);

        if (!user) {
          return false;
        };
  
        const { password } = user;
        const decryptedPassword = decryption(password);
  
        if (passwordProvided === decryptedPassword) {
          console.log('Login ok!');
          return true;
        } else {
          console.log('Login refused!');
          return false;
        };
  
      } catch (err) {
        console.log(err);
      };
    },
  },

  Mutation: {
    createUser: async (_, { data }) => {
      try {
        const { firstName, email, password } = data;

        const userExists = await UserRepository.findUserByEmail(email);
        if (userExists) {
          return new Error('User already exists');
        };
  
        if([firstName, email, password].some((item) => !item)) {
          return 'There are empty required fields';
        };

        const encryptedPassword = encryption(password);
  
        const newUser = await UserRepository.create({...data, password: encryptedPassword});
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

    generateCodeToResetPassword: async (_, { email }) => {
      try {
        const randomCode = generateRandomCode();
        
        const userToResetPassword = await UserRepository.generateCodeToResetPassword(email, randomCode);

        if (userToResetPassword) {
          const { email } = userToResetPassword;
          sendEmailToResetPassword(email, randomCode);
        }
        return !!userToResetPassword;
      } catch (err) {
        console.log(err);
      };
    },

    updateUserPassword: async (_, { email, newPassword }) => {
      try {
        const userWithNewPassword = await UserRepository.updateUserPassword(email, newPassword);
        return userWithNewPassword;
      } catch (err) {
        console.log(err);
      };
    },
  },
};