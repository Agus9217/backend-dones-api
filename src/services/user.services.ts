import {
  CreateUserType,
  GetUserType,
  UpdateUserType,
} from '../interfaces/user.type';
import { User } from '../models/user.model';

export const UserGetServices = async (): Promise<GetUserType[] | string> => {
  const getAllUsers = await User.find();

  if (getAllUsers.length === 0) {
    throw new Error('No users found');
  }

  const data = getAllUsers.map((user) => {
    const userData: GetUserType = {
      id: user.id,
      name: user.name,
      lastName: user.lastName,
      email: user.email,
      role: user.role,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    };
    return userData;
  });
  return data;
};

export const UserCreateServices = async (
  data: CreateUserType
): Promise<GetUserType> => {
  const newUser = await User.create(data);
  const userData: GetUserType = {
    id: newUser.id,
    name: newUser.name,
    lastName: newUser.lastName,
    email: newUser.email,
    role: newUser.role,
    createdAt: newUser.createdAt,
    updatedAt: newUser.updatedAt,
  };
  return userData;
};

export const UserFindByIdServices = async (
  id: string
): Promise<GetUserType> => {
  const user = await User.findById(id);

  if (!user) {
    throw new Error('No user found');
  }

  const userData: GetUserType = {
    id: user?.id,
    name: user?.name!,
    lastName: user?.lastName!,
    email: user?.email!,
    role: user?.role!,
    createdAt: user?.createdAt!,
    updatedAt: user?.updatedAt!,
  };

  return userData;
};

export const UserUpdateServices = async (id: string, data: UpdateUserType) => {
  const user = await User.findByIdAndUpdate(id, data, { new: true });
  if (!user) {
    throw new Error('User not exist');
  }

  const userData: GetUserType = {
    id: user.id,
    name: user.name,
    lastName: user.lastName,
    email: user.email,
    role: user.role,
    createdAt: user.createdAt,
    updatedAt: user.updatedAt,
  };

  return userData;
};

export const UserDeleteServices = async (id: string) => {
  const user = await User.findByIdAndDelete(id);
  if (!user) {
    throw new Error('User not exist');
  }
  return 'Usuario eliminado';
};
