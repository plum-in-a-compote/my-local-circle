import { z } from 'zod';

export const SignInFieldsSch = z.object({
  // no .email() function call, bcs it's more strict than input type="email"
  email: z.string(),
  password: z.string(),
});

export type SignInFields = z.infer<typeof SignInFieldsSch>;
