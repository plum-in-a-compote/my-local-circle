import { useMutation, useQueryClient } from '@tanstack/react-query';
import { requestToJoinCommunity } from '../lib/post/requestToJoinCommunity';
import { CommunityJoinRequest } from '../validators/CommunityJoinRequest';

export const useRequestToJoinCommunity = () => {
  const queryClient = useQueryClient();

  return useMutation<unknown, unknown, CommunityJoinRequest>(
    (fields) => requestToJoinCommunity(fields),
    {
      onSuccess: (_, { userId }) => {
        void queryClient.invalidateQueries(['communityJoinRequest', userId]);
      },
    },
  );
};
