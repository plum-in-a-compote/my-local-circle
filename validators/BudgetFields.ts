import { z } from 'zod';

export const BudgetSch = z.object({
  name: z.string(),
  description: z.string(),
  budgetType: z.enum(['static', 'progressive']),
  estimatedCost: z.number().int(),
  // Zod docs recommended way of accepting dates as strings
  estimatedRealizationDate: z.preprocess((arg) => {
    if (typeof arg == 'string' || arg instanceof Date) return new Date(arg);
  }, z.date()),
  coordinator: z.string(),
  communityId: z.number(),
});

export const BudgetFieldsSch = z.object({
  name: z.string(),
  description: z.string(),
  budgetType: z.enum(['static', 'progressive']),
  estimatedCost: z.number().int(),
  // Zod docs recommended way of accepting dates as strings
  estimatedRealizationDate: z.preprocess((arg) => {
    if (typeof arg == 'string' || arg instanceof Date) return new Date(arg);
  }, z.date()),
  coordinator: z.string(),
  communityId: z.number(),
});

export type BudgetFields = z.infer<typeof BudgetFieldsSch>;
