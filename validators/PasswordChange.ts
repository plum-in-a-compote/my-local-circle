import { z } from 'zod';

export const PasswordChangeSch = z
  .object({
    oldPassword: z.string().min(8),
    newPassword: z.string().min(8),
    newPasswordConfirmation: z.string().min(8),
  })
  .refine((data) => data.newPassword === data.newPasswordConfirmation, {
    message: "Passwords don't match",
    path: ['passwordConfirmation'],
  });

export type PasswordChangeFields = z.infer<typeof PasswordChangeSch>;
