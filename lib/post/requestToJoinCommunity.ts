import { CommunityJoinRequest } from '../../validators/CommunityJoinRequest';
import { supabase } from '../supabase';

export const requestToJoinCommunity = async (fields: CommunityJoinRequest) => {
  const { data, error } = await supabase.from('CommunityJoinRequest').insert([fields]);

  if (error) {
    throw new Error(error.message);
  }

  return data;
};
