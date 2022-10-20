import { useMutation } from '@tanstack/react-query';
import { requestToJoinCommunity } from '../lib/post/requestToJoinCommunity';
import { CommunityJoinRequest } from '../validators/CommunityJoinRequest';

export const useRequestToJoinCommunity = () => {
  return useMutation<unknown, unknown, CommunityJoinRequest>((fields) =>
    requestToJoinCommunity(fields),
  );
};
