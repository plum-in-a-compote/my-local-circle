import { z } from 'zod';
import { SIMPLE_PHONE_REGEX } from '../constants/regex';

export const AccountFieldsSch = z.object({
  name: z.string(),
  address: z.string().optional(),
  phoneNo: z
    .string()
    .optional()
    .refine(
      (val) => {
        return val === '' || SIMPLE_PHONE_REGEX.test(val ?? '');
      },
      { message: 'Not allowed phone number format.' },
    ),
});

export type AccountFields = z.infer<typeof AccountFieldsSch>;
