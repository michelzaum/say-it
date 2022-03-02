const posts = require('../mock/mock_posts');

class PostRepository {
  listPost() {
    return new Promise((resolver) => resolver(posts));
  };

  create(data, author) {
    return new Promise((resolver) => {
      const newPost = {
        id: posts.length + 1,
        ...data,
        author,
      };

      posts.push(newPost);
      resolver(newPost);
    });
  };
};

module.exports = new PostRepository();