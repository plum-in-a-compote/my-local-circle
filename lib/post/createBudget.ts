import { BudgetFieldsSch, BudgetFields } from '../../validators/BudgetFields';
import { supabase } from '../supabase';

export const createBudget = async (fields: BudgetFields) => {
  const parsedFields = BudgetFieldsSch.parse(fields);
  const { data, error } = await supabase.from('Budget').insert(parsedFields);

  if (error) {
    throw new Error(error.message);
  }

  return data;
};
