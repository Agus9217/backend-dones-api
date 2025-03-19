import { Router } from 'express';
import {
  UserCreateController,
  UserDeleteController,
  UserFindByIdController,
  UserGetController,
  UserUpdateController,
} from '../controllers/user.controller';

export const router = Router();

router
  .get('/user', UserGetController)
  .get('/user/:id', UserFindByIdController)
  .post('/user', UserCreateController)
  .put('/user/:id', UserUpdateController)
  .delete('/user/:id', UserDeleteController)
