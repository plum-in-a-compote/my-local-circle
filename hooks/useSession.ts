import { useQuery } from 'react-query';
import { getSession } from '../lib/get/getSession';

export const useSession = () => {
  const { data, isLoading, error } = useQuery('session', getSession);

  return {
    session: data?.session,
    isLoading,
    error,
  };
};
