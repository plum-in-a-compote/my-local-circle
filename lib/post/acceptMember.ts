import { CommunityJoinRequest } from '../../validators/CommunityJoinRequest';
import { supabase } from '../supabase';

export const acceptMember = async (fields: CommunityJoinRequest) => {
  const { data, error } = await supabase.from('CommunityJoinRequest').delete().match(fields);
  const { data: membership, error: errorMembership } = await supabase
    .from('CommunityMembership')
    .insert({ communityId: fields.communityId, userId: fields.userId });

  if (error || errorMembership) {
    throw new Error('Error');
  }

  return membership;
};
