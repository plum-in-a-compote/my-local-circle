import { FormEventHandler, Fragment, useRef, useState } from 'react';
import { SignUpFields, SignUpFieldsSch } from '../../../validators/SignUpFields';
import { Badge } from '../../generic/Badge/Badge';
import { Button } from '../../generic/Button/Button';
import { Text } from '../../generic/Text/Text';
import { ErrorMessage } from '../../generic/ErrorMessage/ErrorMessage';
import { Heading } from '../../generic/Heading/Heading';
import { Input } from '../../generic/Input/Input';
import { SIMPLE_PHONE_PATTERN } from '../../../constants/regex';
import { WarningMessage } from '../../generic/WarningMessage/WarningMessage';
import { MIN_PASSWORD_LENGTH } from '../../../constants/password';
import Link from 'next/link';
import { GENERIC_INPUT_ERROR_MSG } from '../../../constants/error';
import { useLocale } from '../../../lib/locale/LocaleContext';

type SignUpFormProps = {
  onSubmit: (fields: SignUpFields) => void;
};

export const SignUpForm = ({ onSubmit }: SignUpFormProps) => {
  const formRef = useRef<HTMLFormElement>(null);
  const [inputErrorMessage, setInputErrorMessage] = useState(false);
  const [differentPasswords, setDifferentPasswords] = useState(false);

  const gl = useLocale<'SignUp'>();

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    // in a way this is a redundant check, but makes
    // sure that types are matched
    const formData = new FormData(e.currentTarget);

    const result = SignUpFieldsSch.safeParse({
      name: formData.get('fullName'),
      email: formData.get('email'),
      password: formData.get('password'),
      passwordConfirmation: formData.get('passwordConfirmation'),
      phoneNo: formData.get('phoneNo'),
      address: formData.get('address'),
    });

    if (result.success) {
      onSubmit(result.data);
      setInputErrorMessage(false);
      setDifferentPasswords(false);
      return;
    }

    const differentPasswords =
      result.error.issues.find((issue) => issue.code === 'custom')?.message ===
      "Passwords don't match";
    if (differentPasswords) {
      setDifferentPasswords(true);
      return;
    }

    setDifferentPasswords(false);
    setInputErrorMessage(true);
  };

  return (
    <Fragment>
      {inputErrorMessage && (
        <ErrorMessage
          className="mb-6 sm:col-end-2"
          title={gl('inputDataError')}
          description={GENERIC_INPUT_ERROR_MSG}
        />
      )}
      {differentPasswords && (
        <WarningMessage
          className="mb-6 sm:col-end-2"
          title={gl('passwordsMatchingErrorTitle')}
          description={gl('passwordsMatchingError')}
        />
      )}
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="flex flex-col items-start gap-y-12 sm:col-span-2 sm:gap-y-16"
      >
        <fieldset className="w-full flex flex-col gap-y-6  sm:grid sm:grid-cols-2 sm:gap-y-8 sm:gap-x-8">
          <Input type="text" name="fullName" label={gl('nameSurname')} placeholder="Jan Kowalski" />
          <Input type="email" name="email" label={gl('nameSurname')} placeholder="jan@gmail.com" />
          <Input
            type="password"
            name="password"
            label={gl('minCharactersAmount')}
            minLength={MIN_PASSWORD_LENGTH}
          />
          <Input
            type="password"
            name="passwordConfirmation"
            label={gl('repeatPassword')}
            minLength={MIN_PASSWORD_LENGTH}
          />
        </fieldset>

        <fieldset className="w-full flex flex-col">
          <legend className="mb-8 sm:w-1/2 sm:pr-4">
            <div className="flex gap-3 items-center mb-3">
              <Heading as="h2" variant="smBold" content={gl('extraInformation')} />
              <Badge color="blue" textContent={gl('authorsRecommendation')} />
            </div>
            <Text content={gl('informationParagraph')} />
          </legend>
          <div className="flex flex-col gap-6 sm:grid sm:grid-cols-2 sm:gap-8">
            <Input
              type="tel"
              name="phoneNo"
              label={gl('phoneNumber')}
              placeholder="123 456 789"
              required={false}
              pattern={SIMPLE_PHONE_PATTERN}
            />
            <Input
              type="text"
              name="address"
              label={gl('address')}
              placeholder="Ostrowiec Świętokrzyski, ul. Sandomierska 2"
              required={false}
            />
          </div>
        </fieldset>

        <div className="flex gap-1 items-baseline sm:gap-2">
          <Button type="submit" content={gl('register')} variant="primary" />
          <Text as="span" content={gl('or')} />
          <Link href="/signup">
            <button className="rounded px-1 py-1 bg-gray-50 text-gray-800 border border-gray-200 text-xs leading-4 font-semibold transition-colors sm:px-1 sm:py-1 sm:text-sm sm:leading-5 lg:px-4 lg:py-2 lg:text-base lg:leading-6 hover:bg-gray-200 focus:outline-none focus:ring focus:ring-blue-300">
              {gl('createAccount')}
            </button>
          </Link>
        </div>
      </form>
    </Fragment>
  );
};
