import { z } from 'zod';

export const CommunitySch = z.object({
  id: z.number().optional(),
  name: z.string(),
  city: z.string(),
  address: z.string(),
  adminId: z.string(),
  description: z.string(),
  slug: z.string(),
});

// used to post data to the server
export const CommunityFieldsSch = z.object({
  name: z.string(),
  city: z.string(),
  address: z.string(),
  adminId: z.string(),
  description: z.string(),
  // slug not present at client
});

export type Community = z.infer<typeof CommunitySch>;
export type CommunityFields = z.infer<typeof CommunityFieldsSch>;
