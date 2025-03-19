import { Request, Response } from 'express';
import {
  UserCreateServices,
  UserDeleteServices,
  UserFindByIdServices,
  UserGetServices,
  UserUpdateServices,
} from '../services/user.services';

export const UserGetController = async (
  _req: Request,
  res: Response
): Promise<void> => {
  try {
    const data = await UserGetServices();
    if (data.length === 0) {
      res.send({ message: 'No users found' }).status(204);
      return;
    }
    res.send({ status: 'OK', data }).status(200);
  } catch (error: any) {
    res.status(500).send({ status: 'FAILED', data: error.message });
  }
};

export const UserCreateController = async (req: Request, res: Response) => {
  try {
    const data = req.body;
    const newUser = await UserCreateServices(data);
    res.send({ status: 'OK', data: newUser }).status(201);
  } catch (error: any) {
    res.status(500).send({ status: 'FAILED', data: error.message });
  }
};

export const UserFindByIdController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const user = await UserFindByIdServices(id);
    res.send({ status: 'OK', data: user }).status(200);
  } catch (error: any) {
    res.status(500).send({ status: 'FAILED', data: error.message });
  }
};

export const UserUpdateController = async (req: Request, res: Response) => {
  try {
    const userUpdate = await UserUpdateServices(req.params.id, req.body);
    res.send({ status: 'OK', data: userUpdate }).status(200);
  } catch (error: any) {
    res.status(500).send({ status: 'FAILED', data: error.message });
  }
};

export const UserDeleteController = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const userDeleted = await UserDeleteServices(id);
    res.send({ status: 'OK', data: userDeleted }).status(200);
  } catch (error: any) {
    res.status(500).send({ status: 'FAILED', data: error.message });
  }
};
