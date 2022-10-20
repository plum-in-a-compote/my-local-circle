import { useQuery } from '@tanstack/react-query';
import { getMe } from '../lib/get/getMe';
import { useSession } from './useSession';

export const useUser = () => {
  const { data: session, isError, isLoading } = useSession();
  const userId = session?.session?.user.id;
  const accessToken = session?.session?.access_token;

  // there's an explicit coupling between session and user.
  // if we send request to get user data without session present
  // server will respond with 500 HTTP Code
  const queryParams = useQuery(['me', userId], () => getMe(accessToken as string), {
    enabled: Boolean(accessToken),
  });

  return {
    ...queryParams,
    isError: queryParams.isError || isError,
    isLoading: (queryParams.fetchStatus !== 'idle' && queryParams.isLoading) || isLoading,
    logged: Boolean(queryParams.data?.id),
  };
};
