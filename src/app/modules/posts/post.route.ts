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

router.get('/post', PostController.getPost);
router.put(
  '/post',
  validateRequest(PostValidation.UpdatePostValidationSchema),
  PostController.UpdatePost,
);
router.delete('/post', PostController.DeletePost);

export const PostRoutes = router;
