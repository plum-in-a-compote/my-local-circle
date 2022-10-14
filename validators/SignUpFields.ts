import { z } from 'zod';

export const SignUpFieldsSch = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string(),
  phoneNo: z.string().optional(),
  address: z.string().optional(),
});

export type SignUpFields = z.infer<typeof SignUpFieldsSch>;
