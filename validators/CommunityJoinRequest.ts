import { z } from 'zod';

export const CommunityJoinRequestSch = z.object({
  userId: z.string(),
  communityId: z.number(),
  name: z.string().optional(),
  email: z.string().optional(),
});

export type CommunityJoinRequest = z.infer<typeof CommunityJoinRequestSch>;
