const users = require('../mock/mock_users');

class UserRepository {
  findAll() {
    return new Promise((resolve) => resolve(users));
  }

  findUserById(id) {
    return new Promise((resolve) => resolve(
      users.find((user) => user.id === id)
    ))
  }

  create(data) {
    return new Promise((resolve) => {
      const newUser = {
        id: users.length + 1,
        ...data,
      }

      users.push(newUser);
      resolve(newUser);
    });
  }

  update(id, data) {
    return new Promise((resolve) => {
      let updatedUser = {};

      users.forEach((user, index) => {
        if(user.id === id) {
          updatedUser = {
            ...user,
            ...data
          };
          users[index] = updatedUser;
        }
      })
      resolve(updatedUser);
    })
  }

  delete(id) {
    const deleted = true;
    return new Promise((resolve) => {
      users = users.filter((user) => user.id !== id);
      resolve(deleted);
    });
  }
}

module.exports = new UserRepository();