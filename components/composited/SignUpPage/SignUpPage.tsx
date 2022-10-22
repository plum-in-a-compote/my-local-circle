import { useRouter } from 'next/router';
import { useMutation } from '@tanstack/react-query';

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
      <Heading className="mb-3 sm:col-end-2 lg:mb-4" as="h1" variant="base" content="Rejestracja" />
      <Text
        className="mb-8 sm:col-end-2"
        content="Konto jest potrzebne, aby utworzyć lokalną społeczność lub do niej dołączyć."
      />
      {/* Displays error in the same place as the form rendered below */}
      {register.isError && (
        <ErrorMessage
          className="mb-6 sm:col-end-2"
          title="Nie udało się założyć konta!"
          description="Sprawdź czy wprowadzone dane są poprawne i spróbuj ponownie. Jeśli nie możesz rozwiązać problemu, skontakuj się z administracją serwisu."
        />
      )}
      <SignUpForm onSubmit={register.mutate} />
    </section>
  );
};
