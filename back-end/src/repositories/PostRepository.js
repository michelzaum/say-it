const db = require('../database');

class PostRepository {
  async listPost() {
    try {
      const [posts] = await db.query(`
        SELECT *, posts.id
        FROM posts
        INNER JOIN users
        ON posts.user_id = users.id
      `);
      return posts;
    } catch (err) {
      console.log(err);
    }
  };

  async create(content, authorId) {    
    try {
      const [response] = await db.query(`
        INSERT INTO posts (
          content, user_id
        ) VALUES (
          ?, ?
        );
      `, [content, authorId]);
      return response.affectedRows;
    } catch (err) {
      console.log(err);
    }
  };

  async delete(id) {
    try {
      const response = await db.query(`
        DELETE FROM posts WHERE id = ?
      `, [id]);
      return response.affectedRows;
    } catch (err) {
      console.log(err);
    }
  };
};

module.exports = new PostRepository();
