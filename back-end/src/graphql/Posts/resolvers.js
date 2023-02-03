const PostRepository = require("../../repositories/PostRepository");
const UserRepository = require("../../repositories/UserRepository");

module.exports = {
  Query: {
    posts: async () => {
      try {
        return await PostRepository.listPost();
      } catch (err) {
        console.log(err);
      };
    },
  },

  Mutation: {
    createPost: async (_, { data }) => {
      try {
        const { authorId } = data;
        const author = UserRepository.findUserById(Number(authorId));
  
        const newPost = PostRepository.create(data, author);
        return newPost;
      } catch (err) {
        console.log(err);
      };
    },

    deletePost: async (_, { id }) => {
      try {
        const postDeleted = PostRepository.delete(Number(id));
        return postDeleted;
      } catch (err) {
        console.log(err);
      };
    },
  },
};