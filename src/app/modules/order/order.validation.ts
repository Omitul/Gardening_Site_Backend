import { z } from 'zod';

export const CreateOrderValidationSchema = z.object({
  body: z.object({
    name: z.string().min(1),
    email: z.string().email(),
    contactNo: z
      .string()
      .regex(/^\d{10,}$/, 'Contact number must be at least 10 digits'),
    price: z.string(),
    address: z.string().min(1),
  }),
});

export const OrderValidation = {
  CreateOrderValidationSchema,
};
