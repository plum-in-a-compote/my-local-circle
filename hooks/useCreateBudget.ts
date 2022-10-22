import { useMutation } from '@tanstack/react-query';
import { fetcher } from '../lib/fetcher';
import { BudgetFields } from '../validators/Budget';

export const useCreateBudget = () => {
  return useMutation<unknown, unknown, BudgetFields>((fields) =>
    fetcher('/api/budgets', { method: 'POST', body: fields }),
  );
};
