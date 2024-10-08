import { z } from 'zod';

export const CreateCommentValidationSchema = z.object({
  body: z.object({
    content: z.string().min(1),
    post: z.string(),
    author: z.string(),
  }),
});

export const UpdateCommentValidationSchema = z.object({
  body: z.object({
    content: z.string().optional(),
    post: z.string().optional(),
    author: z.string().optional(),
  }),
});

export const CommentValidation = {
  CreateCommentValidationSchema,
  UpdateCommentValidationSchema,
};
