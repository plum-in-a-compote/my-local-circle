import { useMutation } from '@tanstack/react-query';
import { fetcher } from '../lib/fetcher';
import { Community, CommunityFields, CommunitySch } from '../validators/Community';

export const useCreateCommunity = () => {
  return useMutation<Community, unknown, CommunityFields>((fields) =>
    fetcher('/api/communities', { method: 'POST', body: fields, zSch: CommunitySch }),
  );
};
