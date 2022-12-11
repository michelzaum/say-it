import UserRepository from '../../repositories/UserRepository';
import { generateRandomCode } from '../../utils/generateRandomCode';
import { sendCodeToResetPasswordViaEmail } from '../../utils/sendEmail';
import { encryption } from '../../utils/encryption';
import { decryption } from '../../utils/decryption';

type User = {
  id: string
  first_name: string
  last_name: string
  email: string
  password: string
  country: string
  is_active: Boolean
  bio: string
  code_to_reset_password: Number
  github: string
  linkedin: string
};

export const userResolver = {
  Query: {
    listUsers: async () => {
      try {
        const allUsers = await UserRepository.listAll();
        return allUsers;
      } catch (err) {
        console.log(err);
      };
    },

    findUserById: async (parent: any, params: User) => {
      const { id } = params;
      try {
        if (id) {
          const userById = await UserRepository.listOne(id);
          return userById;
        };
      } catch (err) {
        console.log(err);
      };
    },

    findUserByEmail: async (parent: any, params: User) => {
      const { email } = params;
      try {
        if (email) {
          const userByEmail = await UserRepository.findUserByEmail(email);
          return userByEmail;
        };
      } catch (err) {
        console.log(err);
      }
    },

    isCodeProvidedValid: async(parent: any, email: string, codeProvided: number) => {
      try {
        return await UserRepository.isCodeProvidedValid(email, codeProvided);
      } catch (err) {
        console.log(err);
      };
    },

    login: async (parent: any, email: string, passwordProvided: string) => {
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
    createUser: async (parent: any, data: User) => {
      try {
        const { first_name, last_name, email, password } = data;

        // const userExists = await UserRepository.findUserByEmail(email);
        // if (userExists) {
        //   return new Error('User already exists');
        // };
  
        if([first_name, last_name, email, password].some((item) => !item)) {
          return 'There are empty required fields';
        };

        const encryptedPassword = encryption(password);
  
        const newUser = await UserRepository.create({...data, password: encryptedPassword});
        return newUser;
      } catch (err) {
        console.log(err);
      };
    },

    updateUser: async (parent: any, id: string, data: User) => {
      try {
        const encryptedPassword = encryption(data.password);
        const userData = { ...data, password: encryptedPassword };
        
        const updatedUser = await UserRepository.update(id, userData);
        return updatedUser;
      } catch (err) {
        console.log(err);
      };
    },

    deleteUser: async (parent: any, id: string) => {
      try {
        return await UserRepository.delete(id);
      } catch (err) {
        console.log(err);
      };
    },

    generateCodeToResetPassword: async (parent: any, email: string) => {
      try {
        const randomCode = generateRandomCode();
        
        const userToResetPassword = await UserRepository.generateCodeToResetPassword(email, randomCode);

        if (userToResetPassword) {
          const { email } = userToResetPassword;
          sendCodeToResetPasswordViaEmail(email, randomCode);
        }
        return !!userToResetPassword;
      } catch (err) {
        console.log(err);
      };
    },

    updateUserPassword: async (parent: any, email: string, newPassword: string) => {
      try {
        const newPasswordEncrypted = encryption(newPassword);
        const userWithNewPassword = await UserRepository.updateUserPassword(email, newPasswordEncrypted);
        return userWithNewPassword;
      } catch (err) {
        console.log(err);
      };
    },
  },
};