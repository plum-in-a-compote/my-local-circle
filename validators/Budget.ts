import { z } from 'zod';

export const BudgetSch = z.object({
  id: z.number().optional(),
  name: z.string(),
  description: z.string(),
  budgetType: z.enum(['static', 'progressive']),
  estimatedCost: z.number().int(),
  // Zod docs recommended way of accepting dates as strings
  estimatedRealisationDate: z.preprocess((arg) => {
    if (typeof arg == 'string' || arg instanceof Date) return new Date(arg);
  }, z.date()),
  coordinator: z.string(),
  communityId: z.number(),
  slug: z.string(),
});

export const SafeStaticBudgetSch = z.object({
  id: z.number().optional(),
  name: z.string(),
  description: z.string(),
  budgetType: z.enum(['static', 'progressive']),
  estimatedCost: z.number().int(),
  // Static props can't be Object
  estimatedRealisationDate: z.string(),
  coordinator: z.string(),
  communityId: z.number(),
  slug: z.string(),
});

export const BudgetFieldsSch = z.object({
  id: z.number().optional(),
  name: z.string(),
  description: z.string(),
  budgetType: z.enum(['static', 'progressive']),
  estimatedCost: z.number().int(),
  // Zod docs recommended way of accepting dates as strings
  estimatedRealisationDate: z.preprocess((arg) => {
    if (typeof arg == 'string' || arg instanceof Date) return new Date(arg);
  }, z.date()),
  coordinator: z.string(),
  communityId: z.number(),
});

export type BudgetFields = z.infer<typeof BudgetFieldsSch>;
export type Budget = z.infer<typeof BudgetSch>;
export type SafeDateBudget = z.infer<typeof SafeStaticBudgetSch>;
