import { z } from 'zod';

export const CommunitySch = z.object({
  name: z.string(),
  city: z.string(),
  address: z.string(),
  adminId: z.string(),
  slug: z.string(),
});

// used to post data to the server
export const CommunityFieldsSch = z.object({
  name: z.string(),
  city: z.string(),
  address: z.string(),
  adminId: z.string(),
  // optional on client, added on the server proxy
  slug: z.string().optional(),
});

export type Community = z.infer<typeof CommunitySch>;
export type CommunityFieldsSch = z.infer<typeof CommunityFieldsSch>;
