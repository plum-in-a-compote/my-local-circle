import Link from 'next/link';
import { FormEventHandler, Fragment, useRef, useState } from 'react';
import { GENERIC_INPUT_ERROR_MSG } from '../../../constants/error';
import { SignInFields, SignInFieldsSch } from '../../../validators/SignInFields';
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
        <div className="flex gap-1 items-baseline sm:gap-2">
          <Button
            className="sm:px-2 lg:px-6"
            type="submit"
            content="Zaloguj się"
            variant="primary"
          />
          <Text as="span" content="lub" />
          <Link href="/signup">
            <button className="rounded px-1 py-1 bg-gray-50 text-gray-800 border border-gray-200 text-xs leading-4 font-semibold transition-colors sm:px-1 sm:py-1 sm:text-sm sm:leading-5 lg:px-2 lg:py-1 lg:text-base lg:leading-6 hover:bg-gray-200 focus:outline-none focus:ring focus:ring-blue-300">
              Utwórz konto
            </button>
          </Link>
        </div>{' '}
      </form>
    </Fragment>
  );
};
