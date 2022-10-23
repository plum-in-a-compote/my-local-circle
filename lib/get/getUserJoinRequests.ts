import { z } from 'zod';
import { CommunityJoinRequestSch } from '../../validators/CommunityJoinRequest';
import { supabase } from '../supabase';

export const getUserJoinRequests = async (userId: string) => {
  const { data, error } = await supabase
    .from('CommunityJoinRequest')
    .select('*')
    .eq('userId', userId);

  if (error) {
    throw new Error(error.message);
  }

  const joinRequests = z.array(CommunityJoinRequestSch).safeParse(data);
  if (!joinRequests.success) {
    throw new Error(joinRequests.error.message);
  }

  return joinRequests.data;
};
