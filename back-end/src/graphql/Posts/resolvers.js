const PostRepository = require("../../repositories/PostRepository");
const UserRepository = require("../../repositories/UserRepository");

module.exports = {
  Query: {
    posts: async() => PostRepository.listPost(),
  },

  Mutation: {
    createPost: async(_, { data }) => {
      const { authorId } = data;
      const author = UserRepository.findUserById(Number(authorId));

      const newPost = PostRepository.create(data, author);
      return newPost;
    },

    deletePost: async(_, { id }) => {
      const postDeleted = PostRepository.delete(Number(id));
      return postDeleted;
    },
  },
};