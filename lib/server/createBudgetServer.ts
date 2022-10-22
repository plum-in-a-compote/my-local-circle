import { Budget, BudgetSch } from '../../validators/Budget';
import { serverSupabase } from '../serverSupabase';

export const createBudgetServer = async (fields: Budget): Promise<Budget> => {
  const { data, error } = await serverSupabase.from('Budget').insert([fields]).select();

  if (error) {
    throw new Error(error.message);
  }

  const budget = BudgetSch.safeParse(data[0]);
  if (!budget.success) {
    throw new Error(budget.error.message);
  }

  return budget.data;
};
