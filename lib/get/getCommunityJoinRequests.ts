import { z } from 'zod';
import { CommunityJoinRequestSch } from '../../validators/CommunityJoinRequest';
import { supabase } from '../supabase';

export const getCommunityJoinRequests = async (communityId: number) => {
  const { data, error } = await supabase
    .from('CommunityJoinRequest')
    .select('*')
    .eq('communityId', communityId);

  if (error) {
    throw new Error(error.message);
  }

  const joinRequests = z.array(CommunityJoinRequestSch).safeParse(data);
  if (!joinRequests.success) {
    throw new Error(joinRequests.error.message);
  }

  return joinRequests.data;
};
