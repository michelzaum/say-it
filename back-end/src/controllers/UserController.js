const UserRepository = require('../repositories/UserRepository');

class UserController {
  async listUsers(request, response) {
    const users = await UserRepository.findAll();
    response.json(users);
  }
}

module.exports = new UserController();