import { Community } from '../../validators/Community';
import { supabase } from '../supabase';

export const createCommunity = async (fields: Community) => {
  const { data, error } = await supabase.from('Community').insert([fields]);

  if (error) {
    throw new Error(error.message);
  }

  return data;
};
