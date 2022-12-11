const db = require('../database');
import { CRUD } from '../interfaces/CRUD';

type User = {
  id: String
  first_name: String
  last_name: String
  email: String
  password: String
  country: String
  is_active: Boolean
  bio: String
  code_to_reset_password: Number
  github: String
  linkedin: String
};

class UserRepository implements CRUD<User> {
  async listAll(): Promise<any> {
    try {
      const [response] = await db.query('SELECT * FROM users');
      return response;
    } catch (err) {
      console.log(err);
    };
  };

  async listOne(id: string): Promise<any> {
    try {
      const [[response]] = await db.query('SELECT * FROM users WHERE id = ?', [id]);
      return response;
    } catch (err) {
      console.log(err);
    };
  };

  async findUserByEmail(email: string) {
    try {
      const [[response]] = await db.query('SELECT * FROM users WHERE email = ?', [email]);
      return response;
    } catch (err) {
      console.log(err);
    };
  };

  async create(data: User) {
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

  async update(id: string, data: User) {
    const { first_name, last_name, email, password, country } = data;
    try {
      await db.query(`
        UPDATE users
        SET first_name = ?, last_name = ?, email = ?, password = ?, country = ?
        WHERE id = ?
      `, [first_name, last_name, email, password, country, id]);
      return this.listOne(id);
    } catch (error) {
      console.log(error);
    };
  };

  async delete(id: String) {
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

  async generateCodeToResetPassword(email: string, randomCode: number) {
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

  async isCodeProvidedValid(email: string, codeProvided: number) {
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

  async updateUserPassword(email: string, newPassword: string) {
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

export default new UserRepository();