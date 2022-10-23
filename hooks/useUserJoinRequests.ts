import { useQuery } from '@tanstack/react-query';
import { getUserJoinRequests } from '../lib/get/getUserJoinRequests';
import { useUser } from './useUser';

export const useUserJoinRequestTo = (communityId: number) => {
  const { data: user } = useUser();
  const userId = user?.id;
  return useQuery(['communityJoinRequest', userId], () => getUserJoinRequests(userId as string), {
    enabled: Boolean(userId),
    select: (joinRequests) => {
      return joinRequests.some((m) => m.communityId === communityId);
    },
  });
};
