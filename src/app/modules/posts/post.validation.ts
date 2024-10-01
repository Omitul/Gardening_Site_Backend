import { z } from 'zod';

export const CreatePostValidationSchema = z.object({
  body: z.object({
    title: z.string().min(1),
    content: z.string().min(1),
    author: z.string().length(24),
    category: z.string().min(1),
    tags: z.array(z.string()),
    isPremium: z.boolean().default(false).optional(),
    images: z.array(z.string()).optional(),
    videos: z.array(z.string()).optional(),
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
    images: z.array(z.string()).optional(),
    videos: z.array(z.string()).optional(),
    comments: z.array(z.string().length(24)).optional(),
  }),
});

export const PostValidation = {
  CreatePostValidationSchema,
  UpdatePostValidationSchema,
};
