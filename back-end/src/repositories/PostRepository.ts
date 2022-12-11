import { CRUDPosts } from "../interfaces/CRUDPosts";

let posts = require('../mock/mock_posts');

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

type Post = {
  id: string
  author: User
  createdAt: string
  content: string
};

class PostRepository implements CRUDPosts<Post> {
  listAll(): Promise<Post[]> {
    throw new Error("Method not implemented.");
  };

  listOne(id: any): Promise<Post> {
    throw new Error("Method not implemented.");
  };

  update(id: string, data: Post): Promise<any> {
    throw new Error("Method not implemented.");
  };

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

  create(data: Post, author: User) {
    return new Promise((resolve, reject) => {
      if(data && author) {
        const newPost = {
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

  delete(id: string) {
    const deleted = true;
    return new Promise((resolve, reject) => {
      if(id) {
        posts = posts.filter((post: Post) => post.id != id);
        resolve(deleted);
      } else {
        reject({ err: 'Error deleting post' });
      };
    });
  };
};

export default new PostRepository();