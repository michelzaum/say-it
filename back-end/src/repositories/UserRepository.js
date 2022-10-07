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
      const [[response]] = await db.query('SELECT * FROM users WHERE id = ?', [id]);
      return response;
    } catch (err) {
      console.log(err);
    };
  };

  async findUserByEmail(email) {
    try {
      const [[response]] = await db.query('SELECT * FROM users WHERE email = ?', [email]);
      return response;
    } catch (err) {
      console.log(err);
    };
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
      return response.affectedRows;
    } catch (err) {
      console.log(err);
    };
  };

  async update(id, data) {
    const { first_name, last_name, email, password, country } = data;
    try {
      await db.query(`
        UPDATE users
        SET first_name = ?, last_name = ?, email = ?, password = ?, country = ?
        WHERE id = ?
      `, [first_name, last_name, email, password, country, id]);
      return this.findUserById(id);
    } catch (error) {
      console.log(error);
    };
  };

  async delete(id) {
    try {
      const [response] = await db.query(`
        DELETE FROM users
        WHERE id = ?
      `, [id]);
      return response.affectedRows;
    } catch (err) {
      console.log(err);
    };
  };

  async generateCodeToResetPassword(email, randomCode) {
    try {
      const [response] = await db.query(`
        UPDATE users
        SET code_to_reset_password = ?
        WHERE email = ?
      `, [randomCode, email]);
      return response.affectedRows;
    } catch (err) {
      console.log(err);
    };
  };

  async isCodeProvidedValid(email, codeProvided) {
    try {
      const [[response]] = await db.query(`
        SELECT code_to_reset_password FROM users
        WHERE email = ?
      `, [email]);
      
      if (response.code_to_reset_password !== codeProvided) {
        return false;
      };
      return true;
    } catch (err) {
      console.log(err);
    };
  };

  async updateUserPassword(email, newPassword) {
    try {
      const [response] = await db.query(`
        UPDATE users
        SET password = ?
        WHERE email = ?
      `, [newPassword, email]);
      return response.affectedRows;
    } catch (err) {
      console.log(err);
    };
  };
};

module.exports = new UserRepository();