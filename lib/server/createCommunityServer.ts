import { Community } from '../../validators/Community';
import { serverSupabase } from '../serverSupabase';

export const createCommunityServer = async (fields: Community) => {
  const { data, error } = await serverSupabase.from('Community').insert([fields]);

  if (error) {
    throw new Error(error.message);
  }

  return data;
};
