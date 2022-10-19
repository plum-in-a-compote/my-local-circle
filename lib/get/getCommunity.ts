import { CommunitySch } from '../../validators/Community';
import { supabase } from '../supabase';

export const getCommunity = async (id: string) => {
  const { data, error } = await supabase.from('Community').select('*').eq('id', id);

  if (error) {
    throw new Error(error.message);
  }

  // always returns an array
  const community = CommunitySch.safeParse(data[0]);
  if (!community.success) {
    throw new Error(community.error.message);
  }

  return community.data;
};
