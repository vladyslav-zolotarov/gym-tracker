import { z } from 'zod';

export const SignUpFormSchema = z
  .object({
    email: z
      .string()
      .min(1, { message: 'This field is required. Please enter your email!' })
      .email({ message: 'Invalid email' }),
    username: z
      .string()
      .min(3, { message: 'This field is required. Please enter your name!' }),
    password: z.string().min(1, {
      message: 'This field is required. Please enter your password!',
    }),
    passwordConfirm: z.string().min(1, {
      message: 'This field is required. Please enter your confirm password!',
    }),
  })
  .refine(data => data.password === data.passwordConfirm, {
    path: ['confirmPassword'],
    message: "Password don't match",
  });

export type SignUpFormType = z.infer<typeof SignUpFormSchema>;
