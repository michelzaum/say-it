let users = require('../mock/mock_users');

class UserRepository {
  findAll() {
    return new Promise((resolve, reject) => {
      const listOfUsers = users;

      if (listOfUsers) {
        resolve(listOfUsers);
      } else {
        reject({err: 'Error fetching users'});
      };
    });
  };

  findUserById(id) {
    return new Promise((resolve, reject) => {
      if (id) {
        resolve(users.find((user) => user.id === id))
      } else {
        reject({ err: 'Error fetching user' });
      };
    });
  };

  create(data) {
    return new Promise((resolve, reject) => {
      if (data) {
        const newUser = {
          id: users.length + 1,
          ...data,
        };
  
        users.push(newUser);
        resolve(newUser);
      } else {
        reject({ err: 'Error creating user' });
      };
    });
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
};

module.exports = new UserRepository();