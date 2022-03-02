let posts = require('../mock/mock_posts');

class PostRepository {
  listPost() {
    return new Promise((resolve) => resolve(posts));
  };

  create(data, author) {
    return new Promise((resolve) => {
      const newPost = {
        id: posts.length + 1,
        ...data,
        author,
      };

      posts.push(newPost);
      resolve(newPost);
    });
  };

  delete(id) {
    const deleted = true;
    return new Promise((resolve) => {
      posts = posts.filter((post) => post.id != id);
      resolve(deleted);
    })
  }
};

module.exports = new PostRepository();