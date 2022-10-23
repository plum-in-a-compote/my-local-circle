import { z } from 'zod';

export const ProjectSch = z.object({
  id: z.number().optional(),
  title: z.string(),
  description: z.string(),
  estimatedCost: z.number(),
  estimatedRealisationDate: z.string(),
  place: z.string(),
});

// Might not be needed as we don't generate slug
export const ProjectFieldsSch = z.object({
  id: z.number().optional(),
  title: z.string(),
  description: z.string(),
  estimatedCost: z.number(),
  estimatedRealisationDate: z.string(),
  place: z.string(),
  coordinator: z.string(),
  budgetId: z.number(),
});

export const ProjectUpvoteSch = z.object({
  userId: z.string(),
  projectId: z.number(),
});

export type Project = z.infer<typeof ProjectSch>;
export type ProjectFields = z.infer<typeof ProjectFieldsSch>;
export type ProjectUpvote = z.infer<typeof ProjectUpvoteSch>;
