import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { UserValidation } from './user.validate';
import { UserController } from './user.controller';

const router = express.Router();

router.post(
  '/user/register',
  validateRequest(UserValidation.CreateUserValidationSchema),
  UserController.createUser,
);

router.put(
  '/user/:id',
  validateRequest(UserValidation.UpdateUserValidationSchema),
  UserController.UpdateUser,
);

router.get('/user/:id', UserController.GetUser);

export const UserRoutes = router;
