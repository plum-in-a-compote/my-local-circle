import { z } from 'zod';

const phoneRegex = /\d{3} \d{3} \d{3}/;

export const SignUpFieldsSch = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string(),
  phoneNo: z.string().regex(phoneRegex).optional(),
  address: z.string().optional(),
});

export type SignUpFields = z.infer<typeof SignUpFieldsSch>;
