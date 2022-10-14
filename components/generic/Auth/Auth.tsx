import { useRouter } from 'next/router';
import { Fragment, useEffect } from 'react';
import { useUser } from '../../../hooks/useUser';

type AuthProps = {
  children: React.ReactNode;
};

export const Auth = ({ children }: AuthProps) => {
  const router = useRouter();
  const { isLoading, logged } = useUser();

  useEffect(() => {
    if (!isLoading && !logged) {
      void router.push('/signin');
    }
  }, [isLoading, logged, router]);

  if (!logged) {
    return null;
  }

  return <Fragment>{children}</Fragment>;
};
