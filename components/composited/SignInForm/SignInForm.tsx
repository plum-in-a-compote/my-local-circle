import Link from 'next/link';
import { FormEventHandler, Fragment, useRef, useState } from 'react';
import { GENERIC_INPUT_ERROR_MSG } from '../../../constants/error';
import { SignInFields, SignInFieldsSch } from '../../../validators/SignInFields';
import { Anchor } from '../../generic/Anchor/Anchor';
import { Button } from '../../generic/Button/Button';
import { ErrorMessage } from '../../generic/ErrorMessage/ErrorMessage';
import { Input } from '../../generic/Input/Input';
import { Text } from '../../generic/Text/Text';

type SignInFormProps = {
  onSubmit: (fields: SignInFields) => void;
};

export const SignInForm = ({ onSubmit }: SignInFormProps) => {
  const formRef = useRef<HTMLFormElement>(null);
  const [inputErrorMessage, setInputErrorMessage] = useState(false);

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    // in a way this is a redundant check, but makes
    // sure that types are matched
    const formData = new FormData(e.currentTarget);
    const result = SignInFieldsSch.safeParse({
      email: formData.get('email'),
      password: formData.get('password'),
    });

    if (result.success) {
      onSubmit(result.data);
      setInputErrorMessage(false);
    } else {
      setInputErrorMessage(true);
    }
  };

  return (
    <Fragment>
      {inputErrorMessage && (
        <ErrorMessage
          className="mb-6 sm:col-end-2"
          title="Błąd danych wejściowych!"
          description={GENERIC_INPUT_ERROR_MSG}
        />
      )}
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="flex flex-col items-start gap-y-6 sm:gap-y-8 sm:col-end-2"
      >
        <Input type="email" name="email" label="Adres email" placeholder="jan@gmail.com" />
        <Input type="password" name="password" label="Hasło" />
        <div className="flex gap-1 items-center lg:gap-2 lg:flex-col lg:pt-4">
          <Button className="lg:w-80" type="submit" content="Zaloguj się" variant="primary" />
          <Text as="span" content="lub" />
          <Anchor className="lg:w-80" variant="plain" content="Utwórz konto" href="/signup" />
        </div>
      </form>
    </Fragment>
  );
};
