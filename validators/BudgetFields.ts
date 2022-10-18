import { z } from 'zod';

export const BudgetSch = z.object({
  name: z.string(),
  description: z.string(),
  budgetType: z.enum(['static', 'progressive']),
  estimatedCost: z.number(),
});

export type BudgetFields = z.infer<typeof BudgetSch>;
