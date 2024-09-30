import { z } from 'zod';

export const CreateUserValidationSchema = z.object({
  body: z.object({
    username: z.string(),
    email: z.string().email(),
    password: z.string(),
    profilePicture: z.string().optional(),
    role: z.enum(['user', 'admin']).default('user'),
    following: z.array(z.string()).optional(),
    followers: z.array(z.string()).optional(),
    verified: z.boolean().default(false).optional(),
    accountType: z.enum(['basic', 'premium']).default('basic').optional(),
  }),
});

export const UpdateUserValidationSchema = z.object({
  body: z.object({
    username: z.string().optional(),
    email: z.string().email().optional(),
    password: z.string().optional(),
    profilePicture: z.string().optional(),
    role: z.enum(['user', 'admin']).optional(),
    following: z.array(z.string()).optional(),
    followers: z.array(z.string()).optional(),
    verified: z.boolean().optional(),
    accountType: z.enum(['basic', 'premium']).optional(),
  }),
});

export const UserValidation = {
  CreateUserValidationSchema,
  UpdateUserValidationSchema,
};
