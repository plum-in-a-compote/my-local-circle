import { useRouter } from 'next/router';
import { useMutation } from 'react-query';

import { signUp } from '../../../lib/post/signUp';
import { ErrorMessage } from '../../generic/ErrorMessage/ErrorMessage';
import { Heading } from '../../generic/Heading/Heading';
import { Text } from '../../generic/Text/Text';
import { SignUpForm } from '../SignUpForm/SignUpForm';

export const SignUpPage = () => {
  const router = useRouter();
  const register = useMutation(signUp, { onSuccess: () => router.push('/') });

  return (
    <section className="sm:grid sm:grid-cols-2 sm:gap-x-8">
      {register.isError && (
        <ErrorMessage
          className="mb-12 sm:col-end-2"
          title="Nie udało się zalogować!"
          description="Sprawdź czy wprowadzone dane są poprawne i spróbuj ponownie. Jeśli nie możesz rozwiązać problemu, skontakuj się z administracją serwisu."
        />
      )}
      <Heading className="mb-3 sm:col-end-2 lg:mb-4" as="h1" variant="base" content="Rejestracja" />
      <Text
        className="mb-8 sm:col-end-2"
        content="Konto jest potrzebne, aby utworzyć lokalną społeczność lub do niej dołączyć."
      />
      <SignUpForm onSubmit={register.mutate} />
    </section>
  );
};
