import { z } from 'zod';

export const CommunitySch = z.object({
  name: z.string(),
  city: z.string(),
  address: z.string(),
  adminId: z.string(),
  // optional on client, added on the server proxy
  slug: z.string().optional(),
});

export type Community = z.infer<typeof CommunitySch>;
