import PostRepository from "../../repositories/PostRepository";
import UserRepository from "../../repositories/UserRepository";

type User = {
  id: string
  first_name: string
  last_name: string
  email: string
  password: string
  country: string
  is_active: Boolean
  bio: string
  code_to_reset_password: Number
  github: string
  linkedin: string
};

type Post = {
  id: string
  author: User
  createdAt: string
  content: string
};

export const postResolver = {
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
    createPost: async (parent: string, data: Post) => {
      try {
        const { author: { id } } = data;
        const author = await UserRepository.listOne(id);
  
        const newPost = PostRepository.create(data, author);
        return newPost;
      } catch (err) {
        console.log(err);
      };
    },

    deletePost: async (parent: string, id: string) => {
      try {
        const postDeleted = PostRepository.delete(id);
        return postDeleted;
      } catch (err) {
        console.log(err);
      };
    },
  },
};