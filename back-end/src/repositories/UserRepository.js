let users = require('../mock/mock_users');
const db = require('../database');

class UserRepository {
  async findAll() {
    try {
      const [response] = await db.query('SELECT * FROM users');
      return response;
    } catch (err) {
      console.log(err);
    };
  };

  async findUserById(id) {
    try {
      const [response] = await db.query('SELECT * FROM users WHERE id = ?', [id]);
      return response;
    } catch (err) {
      console.log(err);
    };
  };

  findUserByEmail(email) {
    return new Promise((resolve, reject) => {
      if (email) {
        const userEmail = users.find((user) => user.email === email);

        if (userEmail) {
          resolve(userEmail);
        } else {
          reject({ message: 'E-mail not found' });
        };
      };
    });
  };

  async create(data) {
    const { first_name, last_name, email, password, country } = data;
    try {
      const [response] = await db.query(`
        INSERT INTO users (
          first_name, last_name, email, password, country
        ) VALUES (
          ?, ?, ?, ?, ?
        )
      `, [first_name, last_name, email, password, country]);
      return response;
    } catch (err) {
      console.log(err);
    };
  };

  update(id, data) {
    return new Promise((resolve, reject) => {
      if (id && data) {
        let updatedUser = {};
  
        users.forEach((user, index) => {
          if(user.id === id) {
            updatedUser = {
              ...user,
              ...data
            };
            users[index] = updatedUser;
          };
        });
        
        resolve(updatedUser);
      } else {
        reject({ err: 'Error updating user' });
      };
    });
  };

  delete(id) {
    const deleted = true;
    return new Promise((resolve, reject) => {
      if (id) {
        users = users.filter((user) => user.id !== id);
        resolve(deleted);
      } else {
        reject({ err: 'Error deleting user' });
      };
    });
  };

  generateCodeToResetPassword(email, randomCode) {
    return new Promise((resolve, reject) => {
      let updatedUser = {};

      if (email && randomCode) {
        users.forEach((user, index) => {
          if (user.email === email) {
            updatedUser = {
              ...user,
              codeToResetPassword: randomCode,
            };
            users[index] = updatedUser;
          };
        });
        resolve(updatedUser);
      } else {
        reject({ message: 'Error in update reset code.' });
      }
    });
  };

  isCodeProvidedValid(email, codeProvided) {
    return new Promise((resolve, reject) => {
      let codeIsValid = false;

      users.forEach(user => {
        if (user.email === email) {
          if (user.codeToResetPassword === codeProvided) {
            codeIsValid = true;
          };
        };
      });
      resolve(codeIsValid);
    });
  };

  updateUserPassword(email, newPassword) {
    return new Promise((resolve, reject) => {
      let updatedUser = {};

      if (email) {
        users.forEach((user, index) => {
          if (user.email === email) {
            updatedUser = {
              ...user,
              password: newPassword,
            };
            users[index] = updatedUser;
          };
        });
        resolve(updatedUser);
      } else {
        reject({ message: 'Email not found' });
      };
    });
  };
};

module.exports = new UserRepository();