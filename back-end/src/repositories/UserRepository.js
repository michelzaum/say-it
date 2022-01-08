const users = [
  {
    id: 1,
    firstName: 'Michel',
    lastName: 'Oliveira',
    email: 'micheloliveira@mail.com',
    password: 'michel123',
  },
  {
    id: 2,
    firstName: 'Ana Maria',
    lastName: 'Oliveira',
    email: 'anamaria@mail.com',
    password: 'ana123',
  },
  {
    id: 3,
    firstName: 'Leticia',
    lastName: 'Ribeiro',
    email: 'leticiaribeiro@mail.com',
    password: 'leticia123',
  },
]

class UserRepository {
  findAll() {
    return new Promise((resolve) => resolve(users));
  }
}

module.exports = new UserRepository();