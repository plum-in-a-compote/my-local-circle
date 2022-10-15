import { z } from 'zod';

export const CommunitySch = z.object({
  name: z.string(),
  city: z.string(),
  address: z.string(),
  adminId: z.string(),
});

export type Community = z.infer<typeof CommunitySch>;
