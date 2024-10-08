import { z } from 'zod';

export const CreatePostValidationSchema = z.object({
  body: z.object({
    title: z.string().min(1),
    content: z.string().min(1),
    author: z.string().length(24),
    category: z.string().min(1),
    isPremium: z.boolean().default(false).optional(),
    images: z.array(z.string()).optional(),
    favourite: z.array(z.string()).optional(),
    upvoted: z.boolean().optional().default(false),
    downvoted: z.boolean().optional().default(false),
    comments: z.array(z.string().length(24)).optional(),
  }),
});

export const UpdatePostValidationSchema = z.object({
  body: z.object({
    title: z.string().min(1).optional(),
    content: z.string().min(1).optional(),
    author: z.string().length(24).optional(),
    category: z.string().min(1).optional(),
    tags: z.array(z.string()).optional(),
    isPremium: z.boolean().optional(),
    favourite: z.array(z.string()).optional(),
    images: z.array(z.string()).optional(),
    upvoted: z.boolean().optional().default(false),
    downvoted: z.boolean().optional().default(false),
    comments: z.array(z.string().length(24)).optional(),
  }),
});

export const PostValidation = {
  CreatePostValidationSchema,
  UpdatePostValidationSchema,
};
