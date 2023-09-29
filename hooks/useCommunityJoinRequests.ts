import { useQuery } from '@tanstack/react-query';
import { getCommunityJoinRequests } from '../lib/get/getCommunityJoinRequests';

export const useCommunityJoinRequests = (communityId: number) => {
  return useQuery(['communityJoinRequest', communityId], () =>
    getCommunityJoinRequests(communityId),
  );
};
