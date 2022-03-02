let posts = require('../mock/mock_posts');

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

  delete(id) {
    return new Promise((resolver) => {
      const deleted = true;
      posts = posts.filter((post) => {
        return post.id != id;
      });
      resolver(deleted);
    })
  }
};

module.exports = new PostRepository();