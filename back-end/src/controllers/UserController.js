const UserRepository = require('../repositories/UserRepository');

class UserController {
  async listUsers(request, response) {
    const users = await UserRepository.findAll();
    response.json(users);
  }

  async findById(request, response) {
    const { id } = request.params;
    const user = await UserRepository.findUserById(id);
    
    response.json(user);
  }

  async createUser(request, response) {
    const { firstName, lastName, email, password } = request.body;
    const newUser = await UserRepository.create({
      firstName, lastName, email, password
    });

    response.json(newUser);
  }

  async updateUser(request, response) {
    const { firstName, lastName, email, password } = request.body;
    const { id } = request.params;

    const updatedUser = await UserRepository.update(Number(id), {
      firstName, lastName, email, password
    });
  
    response.json(updatedUser);
  }

  async deleteUser(request, response) {
    const { id } = request.params;

    await UserRepository.delete(Number(id));
    
    response.sendStatus(204); // 204: No content;
  }
}

module.exports = new UserController();