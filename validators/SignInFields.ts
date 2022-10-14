import { z } from 'zod';

export const SignInFieldsSch = z.object({
  email: z.string().email(),
  password: z.string(),
});

export type SignInFields = z.infer<typeof SignInFieldsSch>;
