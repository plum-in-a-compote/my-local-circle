import { AccountFields } from '../../validators/Account';
import { supabase } from '../supabase';

export const updateUser = async (fields: AccountFields) => {
  const { data, error } = await supabase.auth.updateUser(fields);

  if (error) {
    throw new Error(error.message);
  }

  return data;
};
