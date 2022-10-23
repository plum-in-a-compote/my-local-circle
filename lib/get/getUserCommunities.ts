import { z } from 'zod';
import { CommunityMembershipSch } from '../../validators/CommunityMembership';
import { supabase } from '../supabase';

export const getUserCommunities = async (userId: string) => {
  const { data, error } = await supabase
    .from('CommunityMembership')
    .select('*')
    .eq('userId', userId);

  if (error) {
    throw new Error(error.message);
  }

  const membership = z.array(CommunityMembershipSch).safeParse(data);
  if (!membership.success) {
    throw new Error(membership.error.message);
  }

  return membership.data;
};
