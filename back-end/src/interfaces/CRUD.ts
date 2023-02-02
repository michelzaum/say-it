export interface CRUD<T> {
  listAll (): Promise<T[]>,
  listOne (id: any): Promise<T>,
  create (data: T): Promise<any>,
  update (id: string, data: T): Promise<any>,
  delete (id: string): Promise<any>,
};
