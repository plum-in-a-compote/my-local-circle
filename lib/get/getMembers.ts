import { z } from 'zod';
import { CommunityMembershipSch } from '../../validators/CommunityMembership';
import { supabase } from '../supabase';

export const getMembers = async (communityId: number) => {
  const { data, error } = await supabase
    .from('CommunityMembership')
    .select('*')
    .eq('communityId', communityId);

  if (error) {
    throw new Error(error.message);
  }

  const memberships = z.array(CommunityMembershipSch).safeParse(data);
  if (!memberships.success) {
    throw new Error(memberships.error.message);
  }

  return memberships.data;
};
