const PostRepository = require("../../repositories/PostRepository");

module.exports = {
  Query: {
    posts: async () => {
      try {
        const formatedPosts = [];
        const posts = await PostRepository.listPost();
        for (let post of posts) {
          const { id, created_at, content, ...author } = post;
          formatedPosts.push({
            id,
            created_at,
            content,
            author,
          });
        }
        return formatedPosts;
      } catch (err) {
        console.log(err);
      };
    },
  },

  Mutation: {
    createPost: async (_, { data }) => {
      try {
        const { authorId, content } = data;
        const newPost = await PostRepository.create(content, authorId);
        return newPost;
      } catch (err) {
        console.log(err);
      };
    },

    deletePost: async (_, { id }) => {
      try {
        return await PostRepository.delete(id);
      } catch (err) {
        console.log(err);
      };
    },
  },
};