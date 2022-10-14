import { ChangeEventHandler, Fragment, MouseEventHandler, useCallback, useState } from 'react';
import { Button } from '../../generic/Button/Button';
import { Heading } from '../../generic/Heading/Heading';
import { Text } from '../../generic/Text/Text';
import { ErrorAlert } from '../../generic/ErrorAlert/ErrorAlert';
import { SignInFields } from '../../../validators/SignInFields';
import { SignInForm } from '../SignInForm/SignInForm';
import { useMutation } from 'react-query';
import { signIn } from '../../../lib/post/signIn';

export const SignInPage = () => {
  // const {mutate} = useMutation((f) => {
  //   return signIn(f);
  // });
  const [fields, setFields] = useState<SignInFields>({
    email: '',
    password: '',
  });

  const handleInputChange: ChangeEventHandler<HTMLInputElement | HTMLSelectElement> = useCallback(
    ({ currentTarget }) => {
      setFields((previousFields) => ({
        ...previousFields,
        [currentTarget.name]: currentTarget.value,
      }));
    },
    [],
  );

  const handleSubmit: MouseEventHandler<HTMLButtonElement> = useCallback(() => 1, []);

  return (
    <Fragment>
      <section className="mb-8 sm:mb-12 lg:mb-20">
        <Heading className="mb-3" as="h1" variant="base" content="Logowanie" />
        <Text
          className="mb-12"
          content="Konto jest potrzebne, aby utworzyć lokalną społeczność lub do niej dołączyć."
        />
        <SignInForm fields={fields} onInputChange={handleInputChange} />
      </section>
      <Button variant="primary" content="Zaloguj się" onClick={handleSubmit} />
    </Fragment>
  );
};
