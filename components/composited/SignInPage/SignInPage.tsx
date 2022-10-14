import { useRouter } from 'next/router';

import { Heading } from '../../generic/Heading/Heading';
import { Text } from '../../generic/Text/Text';
import { SignInForm } from '../SignInForm/SignInForm';
import { useMutation } from 'react-query';
import { signIn } from '../../../lib/post/signIn';
import { ErrorMessage } from '../../generic/ErrorMessage/ErrorMessage';

export const SignInPage = () => {
  const router = useRouter();
  const login = useMutation(signIn, { onSuccess: () => router.push('/') });

  return (
    <section>
      {login.isError && (
        <ErrorMessage
          title="Nie udało się zalogować!"
          description="Sprawdź czy wprowadzone dane są poprawne i spróbuj ponownie. Jeśli nie możesz rozwiązać problemu, skontakuj się z administracją serwisu."
        />
      )}
      <Heading className="mb-3 lg:mb-4" as="h1" variant="base" content="Logowanie" />
      <Text
        className="mb-8 sm:mb-12 sm:w-1/2 sm:pr-4"
        content="Konto jest potrzebne, aby utworzyć lokalną społeczność lub do niej dołączyć."
      />
      <SignInForm onSubmit={login.mutate} />
    </section>
  );
};
