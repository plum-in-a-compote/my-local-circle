import { useQuery } from '@tanstack/react-query';
import { getUserCommunities } from '../lib/get/getUserCommunities';
import { useUser } from './useUser';

export const useUserInCommunity = (communityId: number) => {
  const { data: user } = useUser();
  const userId = user?.id;
  return useQuery(['communityMembership', userId], () => getUserCommunities(userId as string), {
    enabled: Boolean(userId),
    select: (memberships) => {
      return memberships.some((m) => m.communityId === communityId);
    },
  });
};
