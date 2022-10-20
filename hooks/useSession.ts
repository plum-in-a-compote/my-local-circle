import { useQuery } from '@tanstack/react-query';
import { getSession } from '../lib/get/getSession';

export const useSession = () => {
  return useQuery(['session'], getSession);
};
