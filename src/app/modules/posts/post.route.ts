import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { PostController } from './post.controller';
const router = express.Router();

router.post(
  '/post',
  validateRequest(UserValidation.CreateUserValidationSchema),
  PostController.createPost,
);

export const PostRoutes = router;
