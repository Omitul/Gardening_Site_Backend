import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { PostController } from './post.controller';
import { PostValidation } from './post.validation';
const router = express.Router();

router.post(
  '/post',
  validateRequest(PostValidation.CreatePostValidationSchema),
  PostController.createPost,
);

export const PostRoutes = router;
