import { z } from 'zod';

export const CreateCategorySchema = z.object({
  user_id: z.string(),
  name: z
    .string()
    .min(1, { message: 'This field is required. Please enter category name!' }),
  description: z.string().optional(),
  icon: z.any(z.instanceof(File)).optional(),
});

export type CreateCategoryType = Omit<
  z.infer<typeof CreateCategorySchema>,
  'icon'
> & {
  icon?: File | undefined;
};
