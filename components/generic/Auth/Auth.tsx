import { useRouter } from 'next/router';
import { Fragment, useEffect } from 'react';
import { useUser } from '../../../hooks/useUser';

type AuthProps = {
  children: React.ReactNode;
  forceRedirect?: boolean;
};

export const Auth = ({ children, forceRedirect = true }: AuthProps) => {
  const router = useRouter();
  const { isLoading, logged } = useUser();

  useEffect(() => {
    if (!isLoading && !logged && forceRedirect) {
      void router.push('/signin');
    }
  }, [forceRedirect, isLoading, logged, router]);

  // if (!logged) {
  //   return null;
  // }

  return <Fragment>{children}</Fragment>;
};
