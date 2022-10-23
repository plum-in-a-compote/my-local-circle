import { z } from 'zod';

export const CommunityMembershipSch = z.object({
  userId: z.string(),
  communityId: z.number(),
});

export type CommunityMembership = z.infer<typeof CommunityMembershipSch>;
