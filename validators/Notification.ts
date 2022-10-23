import { z } from 'zod';

export const NotificationSch = z.object({
  id: z.number(),
  title: z.string(),
  communityName: z.string(),
  notificationType: z.enum([
    'applicationAccepted',
    'newApplication',
    'newProject',
    'projectVotingComplete',
  ]),
});

export type Notification = z.infer<typeof NotificationSch>;
