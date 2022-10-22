import { z } from 'zod';
import { BudgetSch } from '../../validators/BudgetFields';
import { supabase } from '../supabase';

export const getBudgets = async (communityId: number) => {
  const { data, error } = await supabase.from('Budget').select('*').eq('communityId', communityId);

  if (error) {
    throw new Error(error.message);
  }

  const budgets = z.array(BudgetSch).safeParse(data);
  if (!budgets.success) {
    throw new Error(budgets.error.message);
  }

  return budgets.data;
};
