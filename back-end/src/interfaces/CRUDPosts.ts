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

export interface CRUDPosts<T> {
  listAll (): Promise<T[]>,
  listOne (id: any): Promise<T>,
  create (data: T, author: User): Promise<any>,
  update (id: string, data: T): Promise<any>,
  delete (id: string): Promise<any>,
};
