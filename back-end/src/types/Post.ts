import { User } from './User';

export type Post = {
  id: string
  author: User
  createdAt: string
  content: string
};