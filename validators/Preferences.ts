import { z } from 'zod';

export const PreferencesSch = z.object({
  applicationAccepted: z.boolean(),
  newApplication: z.boolean(),
  newProject: z.boolean(),
  projectVotingComplete: z.boolean(),
});

export type Preferences = z.infer<typeof PreferencesSch>;
