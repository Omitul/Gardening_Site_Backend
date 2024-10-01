import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { CommentController } from './comment.controller';
import { CommentValidation } from './comment.validate';

const router = express.Router();

router.post(
  '/comment',
  validateRequest(CommentValidation.CreateCommentValidationSchema),
  CommentController.createComment,
);

router.patch(
  '/comment',
  validateRequest(CommentValidation.UpdateCommentValidationSchema),
  CommentController.createComment,
);

export const UserRoutes = router;
