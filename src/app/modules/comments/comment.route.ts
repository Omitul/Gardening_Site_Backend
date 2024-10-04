import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { CommentController } from './comment.controller';
import { CommentValidation } from './comment.validate';

const router = express.Router();

router.post(
  '/comment',
  // validateRequest(CommentValidation.CreateCommentValidationSchema),
  CommentController.createComment,
);

router.get('/comment/:id', CommentController.getComment);

router.patch('/comment', CommentController.createComment);

router.delete('/comment', CommentController.DeleteComment);

export const CommentRoutes = router;
