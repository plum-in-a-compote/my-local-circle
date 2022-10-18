/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useQuery } from '@tanstack/react-query';
import { getMe } from '../lib/get/getMe';
import { useSession } from './useSession';

export const useUser = () => {
  const { session } = useSession();

  // there's an explicit coupling between session and user.
  // if we send request to get user data without session present
  // server will respond with 500 HTTP Code
  const { data, error, status } = useQuery(
    ['me', session?.user.id],
    () => getMe(session?.access_token as string),
    {
      enabled: Boolean(session?.access_token),
    },
  );

  return {
    user: data,
    logged: Boolean(data?.id),
    isLoading: status === 'idle' || status === 'loading',
    error,
  };
};
