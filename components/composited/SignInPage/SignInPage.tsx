import { useRouter } from 'next/router';

import { Heading } from '../../generic/Heading/Heading';
import { Text } from '../../generic/Text/Text';
import { SignInForm } from '../SignInForm/SignInForm';
import { useMutation } from '@tanstack/react-query';
import { signIn } from '../../../lib/post/signIn';
import { ErrorMessage } from '../../generic/ErrorMessage/ErrorMessage';

export const SignInPage = () => {
  const router = useRouter();
  const login = useMutation(signIn, { onSuccess: () => router.push('/') });

  return (
    <section className="sm:grid sm:grid-cols-2 sm:gap-x-8">
      <Heading className="mb-3 sm:col-end-2 lg:mb-4" as="h1" variant="base" content="Logowanie" />
      <Text
        className="mb-8 sm:col-end-2"
        content="Konto jest potrzebne, aby utworzyć lokalną społeczność lub do niej dołączyć."
      />
      {login.isError && (
        <ErrorMessage
          className="mb-6 sm:col-end-2"
          title="Nie udało się zalogować!"
          description="Sprawdź czy wprowadzone dane są poprawne i spróbuj ponownie. Jeśli nie możesz rozwiązać problemu, skontakuj się z administracją serwisu."
        />
      )}
      <SignInForm onSubmit={login.mutate} />
    </section>
  );
};
