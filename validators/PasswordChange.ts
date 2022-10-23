import { z } from 'zod';
import { MIN_PASSWORD_LENGTH } from '../constants/password';

export const PasswordChangeSch = z
  .object({
    newPassword: z.string().min(MIN_PASSWORD_LENGTH),
    newPasswordConfirmation: z.string().min(MIN_PASSWORD_LENGTH),
  })
  .refine((data) => data.newPassword === data.newPasswordConfirmation, {
    message: "Passwords don't match",
    path: ['passwordConfirmation'],
  });

export type PasswordChangeFields = z.infer<typeof PasswordChangeSch>;
