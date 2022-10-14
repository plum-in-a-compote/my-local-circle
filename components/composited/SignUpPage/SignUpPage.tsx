import { useRouter } from 'next/router';
import { useMutation } from 'react-query';

import { signUp } from '../../../lib/post/signUp';
import { Heading } from '../../generic/Heading/Heading';
import { Text } from '../../generic/Text/Text';
import { SignUpForm } from '../SignUpForm/SignUpForm';

export const SignUpPage = () => {
  const router = useRouter();
  const register = useMutation(signUp, { onSuccess: () => router.push('/') });

  return (
    <section>
      <Heading className="mb-3 lg:mb-4" as="h1" variant="base" content="Rejestracja" />
      <Text
        className="mb-8 sm:mb-12 sm:w-1/2 sm:pr-4"
        content="Konto jest potrzebne, aby utworzyć lokalną społeczność lub do niej dołączyć."
      />
      <SignUpForm onSubmit={register.mutate} />
    </section>
  );
};
