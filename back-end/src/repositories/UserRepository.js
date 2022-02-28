let users = [
  {
    id: 1,
    firstName: 'Michel',
    lastName: 'Oliveira',
    email: 'micheloliveira@mail.com',
    password: 'michel123',
    country: 'Canada',
  },
  {
    id: 2,
    firstName: 'Ana Maria',
    lastName: 'Oliveira',
    email: 'anamaria@mail.com',
    password: 'ana123',
    country: 'England',
  },
  {
    id: 3,
    firstName: 'Leticia',
    lastName: 'Ribeiro',
    email: 'leticiaribeiro@mail.com',
    password: 'leticia123',
    country: 'Italy',
  },
]

class UserRepository {
  findAll() {
    return new Promise((resolve) => resolve(users));
  }

  findUserById(id) {
    return new Promise((resolve) => resolve(
      users.find((user) => user.id === Number(id))
    ))
  }

  create({firstName, lastName, email, password, country}) {
    return new Promise((resolve) => {
      const newUser = {
        id: users.length + 1,
        firstName,
        lastName,
        email,
        password,
        country,
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