import { CRUDPosts } from "../interfaces/CRUDPosts";

import { User } from '../types/User';
import { Post } from '../types/Post';

let posts = require('../mock/mock_posts');

class PostRepository implements CRUDPosts<Post> {
  async listAll(): Promise<Post[]> {
    throw new Error("Method not implemented.");
  };

  async listOne(id: string): Promise<Post> {
    throw new Error("Method not implemented.");
  };

  async update(id: string, data: Post): Promise<any> {
    throw new Error("Method not implemented.");
  };

  async listPost() {
    return new Promise((resolve, reject) => {
      const listPosts = posts;

      if (listPosts) {
        resolve(posts);
      } else {
        reject({ err: 'Error fetching posts' });
      };
    });
  };

  async create(data: Post, author: User) {
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

  async delete(id: string) {
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