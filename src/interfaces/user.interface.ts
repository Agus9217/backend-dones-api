
export interface IUser {
  id: string,
  name: string;
  lastName: string;
  email: string;
  password?: string;
  role?: string;
  createdAt: Date;
  updatedAt: Date;
}