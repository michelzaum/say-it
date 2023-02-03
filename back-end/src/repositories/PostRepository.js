let posts = require('../mock/mock_posts');

class PostRepository {
  listPost() {
    return new Promise((resolve, reject) => {
      const listPosts = posts;

      if (listPosts) {
        resolve(posts);
      } else {
        reject({ err: 'Error fetchin posts' });
      };
    });
  };

  create(data, author) {
    return new Promise((resolve, reject) => {
      if(data && author) {
        const newPost = {
          id: posts.length + 1,
          ...data,
          author,
        };

        posts.push(newPost);
        resolve(newPost);
      } else {
        reject({ err: 'Error creating post' });
      };
    });
  };

  delete(id) {
    const deleted = true;
    return new Promise((resolve, reject) => {
      if(id) {
        posts = posts.filter((post) => post.id != id);
        resolve(deleted);
      } else {
        reject({ err: 'Error deleting post' });
      };
    });
  };
};

module.exports = new PostRepository();