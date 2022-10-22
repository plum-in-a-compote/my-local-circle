import { BudgetSch } from '../../validators/Budget';
import { supabase } from '../supabase';

export const getBudgetBySlug = async (slug: string) => {
  const { data, error } = await supabase.from('Budget').select('*').eq('slug', slug);

  if (error) {
    throw new Error(error.message);
  }

  // always returns an array
  const budget = BudgetSch.safeParse(data[0]);
  if (!budget.success) {
    throw new Error(budget.error.message);
  }

  return budget.data;
};
