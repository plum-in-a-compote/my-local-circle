import { useMutation } from '@tanstack/react-query';
import { fetcher } from '../lib/fetcher';
import { CommunityFieldsSch } from '../validators/Community';

export const useAddCommunity = () => {
  return useMutation<unknown, unknown, CommunityFieldsSch>((fields) =>
    fetcher('/api/communities', fields),
  );
};
