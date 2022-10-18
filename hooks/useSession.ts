/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useQuery } from '@tanstack/react-query';
import { getSession } from '../lib/get/getSession';

export const useSession = () => {
  const { data, isLoading, error } = useQuery(['session'], getSession);

  return {
    session: data?.session,
    isLoading,
    error,
  };
};
