import { z } from 'zod';
import { SIMPLE_PHONE_REGEX } from '../constants/regex';

export const SignUpFieldsSch = z
  .object({
    name: z.string(),
    // no .email() function call, bcs it's more strict than input type="email"
    email: z.string(),
    password: z.string().min(8),
    passwordConfirmation: z.string().min(8),
    phoneNo: z
      .string()
      .optional()
      .refine(
        (val) => {
          return val === '' || SIMPLE_PHONE_REGEX.test(val ?? '');
        },
        { message: 'Not allowed phone number format.' },
      ),
    address: z.string().optional(),
  })
  .refine((data) => data.password === data.passwordConfirmation, {
    message: "Passwords don't match",
    path: ['passwordConfirmation'],
  });

export type SignUpFields = z.infer<typeof SignUpFieldsSch>;
