import { useMutation } from '@tanstack/react-query';
import { fetcher } from '../lib/fetcher';
import { BudgetFields, Budget, BudgetSch } from '../validators/Budget';

export const useCreateBudget = () => {
  return useMutation<Budget, unknown, BudgetFields>((fields) =>
    fetcher('/api/budgets', { method: 'POST', body: fields, zSch: BudgetSch }),
  );
};
