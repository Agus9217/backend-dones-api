
export interface IUser {
  clerkId: string,
  id: string,
  name: string;
  lastName: string;
  email: string;
  password?: string;
  role?: string;
  createdAt: Date;
  updatedAt: Date;
}