import { Budget } from '../../validators/Budget';
import { serverSupabase } from '../serverSupabase';

export const createBudgetServer = async (fields: Budget) => {
  const { data, error } = await serverSupabase.from('Budget').insert([fields]);

  if (error) {
    throw new Error(error.message);
  }

  return data;
};
