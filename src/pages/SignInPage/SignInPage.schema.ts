import { z } from 'zod';

export const SignInFormSchema = z.object({
  email: z
    .string()
    .min(1, { message: 'This field is required. Please enter your email!' })
    .email({ message: 'Invalid email' }),
  password: z
    .string()
    .min(1, { message: 'This field is required. Please enter your password!' }),
});

export type SignInFormType = z.infer<typeof SignInFormSchema>;
