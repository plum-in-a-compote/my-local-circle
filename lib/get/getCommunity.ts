import { CommunitySch } from '../../validators/Community';
import { supabase } from '../supabase';

export const getCommunity = async (id: string) => {
  const { data, error } = await supabase.from('Community').select('*').eq('id', id);

  if (error) {
    throw new Error(error.message);
  }

  const communities = CommunitySch.safeParse(data);
  if (!communities.success) {
    throw new Error(communities.error.message);
  }

  return communities.data;
};
