import { z } from 'zod';

export const UserSchema = z.object({
  id: z.string(),
  created: z.string().optional(),
  updated: z.string().optional(),
  verified: z.boolean().optional(),
  username: z
    .string()
    .min(3, { message: 'This field is required. Please enter your name!' })
    .optional(),
  email: z
    .string()
    .min(1, { message: 'This field is required. Please enter your email!' })
    .email({ message: 'Invalid email' })
    .optional(),
  avatar: z.instanceof(File).optional(),
});

export const ResetPasswordSchema = z
  .object({
    oldPassword: z.string().min(1, {
      message: 'This field is required. Please enter your password!',
    }),
    newPassword: z.string().min(1, {
      message: 'This field is required. Please enter your password!',
    }),
    newPasswordConfirm: z.string().min(1, {
      message: 'This field is required. Please enter your confirm password!',
    }),
  })
  .refine(data => data.newPassword === data.newPasswordConfirm, {
    path: ['newPasswordConfirm'],
    message: "Password don't match",
  });

export type UserType = z.infer<typeof UserSchema>;

export type ResetPasswordType = z.infer<typeof ResetPasswordSchema>;
