import { z } from 'zod';

export const BudgetSch = z.object({
  name: z.string(),
  description: z.string(),
  budgetType: z.enum(['static', 'progressive']),
  estimatedCost: z.number(),
  estimatedRealizationDate: z.preprocess((arg) => {
    if (typeof arg == 'string' || arg instanceof Date) return new Date(arg);
  }, z.date()),
  coordinator: z.string(),
  communityId: z.string(),
});

export type BudgetFields = z.infer<typeof BudgetSch>;
