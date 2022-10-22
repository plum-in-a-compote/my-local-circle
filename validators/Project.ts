import { z } from 'zod';

export const ProjectSch = z.object({
  title: z.string(),
  description: z.string(),
  estimatedCost: z.number(),
  estimatedRealisationDate: z.string(),
  place: z.string(),
  voted: z.boolean(),
});

export type Project = z.infer<typeof ProjectSch>;
