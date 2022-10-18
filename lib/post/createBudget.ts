import { BudgetSch, BudgetFields } from '../../validators/BudgetFields';
import { supabase } from '../supabase';

export const createBudget = async (fields: BudgetFields) => {
  const parsedFields = BudgetSch.parse(fields);
  const { data, error } = await supabase.from('Budget').insert(parsedFields);

  if (error) {
    throw new Error(error.message);
  }

  return data;
};
