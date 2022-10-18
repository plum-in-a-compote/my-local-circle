import { z } from 'zod';
import { INITIAL_PUBLIC_COMMUNITES_DISPLAYED } from '../../constants/community';
import { CommunitySch } from '../../validators/Community';
import { supabase } from '../supabase';

export const getCommunities = async () => {
  const { data, error } = await supabase
    .from('Community')
    .select('*')
    .limit(INITIAL_PUBLIC_COMMUNITES_DISPLAYED);

  console.log(data);

  if (error) {
    throw new Error(error.message);
  }

  const communities = z.array(CommunitySch).safeParse(data);
  if (!communities.success) {
    throw new Error(communities.error.message);
  }

  return communities.data;
};
