import { useRouter } from 'next/router';
import { useMutation } from '@tanstack/react-query';

import { signUp } from '../../../lib/post/signUp';
import { ErrorMessage } from '../../generic/ErrorMessage/ErrorMessage';
import { Heading } from '../../generic/Heading/Heading';
import { Text } from '../../generic/Text/Text';
import { SignUpForm } from '../SignUpForm/SignUpForm';
import { useLocale } from '../../../lib/locale/LocaleContext';

export const SignUpPage = () => {
  const router = useRouter();
  const register = useMutation(signUp, { onSuccess: () => router.push('/') });
  const gl = useLocale<'SignUp'>();

  return (
    <section className="sm:grid sm:grid-cols-2 sm:gap-x-8">
      <Heading
        className="mb-3 sm:col-end-2 lg:mb-4"
        as="h1"
        variant="base"
        content={gl('headingBase')}
      />
      <Text className="mb-8 sm:col-end-2" content={gl('accountRequired')} />
      {/* Displays error in the same place as the form rendered below */}
      {register.isError && (
        <ErrorMessage
          className="mb-6 sm:col-end-2"
          title={gl('creationError')}
          description={gl('validationError')}
        />
      )}
      <SignUpForm onSubmit={register.mutate} />
    </section>
  );
};
