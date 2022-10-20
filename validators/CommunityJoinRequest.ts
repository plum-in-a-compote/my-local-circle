import { z } from 'zod';

export const CommunityJoinRequestSch = z.object({
  userId: z.string(),
  communityId: z.number(),
});

export type CommunityJoinRequest = z.infer<typeof CommunityJoinRequestSch>;
