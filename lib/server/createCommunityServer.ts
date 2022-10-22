import { Community, CommunitySch } from '../../validators/Community';
import { serverSupabase } from '../serverSupabase';

export const createCommunityServer = async (fields: Community): Promise<Community> => {
  const { data, error } = await serverSupabase.from('Community').insert([fields]).select();

  if (error) {
    throw new Error(error.message);
  }
  const community = CommunitySch.safeParse(data[0]);
  if (!community.success) {
    throw new Error(community.error.message);
  }

  return community.data;
};
