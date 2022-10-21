import { z } from 'zod';

export const ProjectSch = z.object({
  title: z.string(),
  description: z.string(),
  // cost as string for display
  estimatedCost: z.number(),
  // don't need to use z.date() here, it's also only for displaying the data, not POSTing
  estimatedRealisationDate: z.string(),
  place: z.string(),
  voted: z.boolean(),
});

export type Project = z.infer<typeof ProjectSch>;
