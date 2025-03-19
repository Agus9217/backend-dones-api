import { IUser } from "./user.interface";

export type GetUserType = Omit<IUser, 'password'>;
export type CreateUserType = Omit<IUser, 'createdAt' | 'updatedAt'>;
export type UpdateUserType = Omit<IUser, 'email' | 'createdAt'>;