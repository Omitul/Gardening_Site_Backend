import { z } from 'zod';

export const CreatePostValidationSchema = z.object({
  body: z.object({
    title: z.string().min(1),
    content: z.string().min(1),
    author: z.string().length(24),
    category: z.string().min(1),
    isPremium: z.boolean().default(false).optional(),
    images: z.array(z.string()).optional(),
    upvoted: z.boolean().optional().default(false),
    downvoted: z.boolean().optional().default(false),
    upvotes: z.array(z.string()).optional(),
    downvvotes: z.array(z.string()).optional(),
    comments: z.array(z.string().length(24)).optional(),
  }),
});

export const UpdatePostValidationSchema = z.object({
  body: z.object({
    title: z.string().min(1).optional(),
    content: z.string().min(1).optional(),
    author: z.string().length(24).optional(),
    category: z.string().min(1).optional(),
    isPremium: z.boolean().optional(),
    images: z.array(z.string()).optional(),
    upvotes: z.array(z.string()).optional(),
    downvvotes: z.array(z.string()).optional(),
    upvoted: z.boolean().optional().default(false),
    downvoted: z.boolean().optional().default(false),
    comments: z.array(z.string().length(24)).optional(),
  }),
});

export const PostValidation = {
  CreatePostValidationSchema,
  UpdatePostValidationSchema,
};
