import { User } from '../types/User';

export interface CRUDPosts<T> {
  listAll (): Promise<T[]>,
  listOne (id: string): Promise<T>,
  create (data: T, author: User): Promise<any>,
  update (id: string, data: T): Promise<any>,
  delete (id: string): Promise<any>,
};
