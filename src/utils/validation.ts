import { z } from 'zod';

export const registerSchema = z.object({
  username: z.string().min(1, 'Username is required'),
  password: z
    .string()
    .min(6, 'Password must be at least 6 characters')
    .regex(
      /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/,
      'Password must contain at least one letter and one number'
    ),
  captcha: z.string().refine((val) => val === 'xiyu666', 'Invalid captcha'),
});

export const loginSchema = z.object({
  username: z.string().min(1, 'Username is required'),
  password: z.string().min(1, 'Password is required'),
});