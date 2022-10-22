import { useMutation } from '@tanstack/react-query';
import { fetcher } from '../lib/fetcher';
import { CommunityFields } from '../validators/Community';

export const useCreateCommunity = () => {
  return useMutation<unknown, unknown, CommunityFields>((fields) =>
    fetcher('/api/communities', fields),
  );
};
