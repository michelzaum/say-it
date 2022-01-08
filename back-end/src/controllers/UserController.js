const UserRepository = require('../repositories/UserRepository');

class UserController {
  async listUsers(request, response) {
    const users = await UserRepository.findAll();
    response.json(users);
  }

  async findById(request, response) {
    console.log(request.params);
    const { id } = request.params;
    const user = await UserRepository.findUserById(id);
    
    response.json(user);
  }
}

module.exports = new UserController();