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
import { GENERIC_INPUT_ERROR_MSG } from '../../../constants/error';
import { Anchor } from '../../generic/Anchor/Anchor';

type SignUpFormProps = {
  onSubmit: (fields: SignUpFields) => void;
};

export const SignUpForm = ({ onSubmit }: SignUpFormProps) => {
  const formRef = useRef<HTMLFormElement>(null);
  const [inputErrorMessage, setInputErrorMessage] = useState(false);
  const [differentPasswords, setDifferentPasswords] = useState(false);

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
          title="B????d danych wej??ciowych!"
          description={GENERIC_INPUT_ERROR_MSG}
        />
      )}
      {differentPasswords && (
        <WarningMessage
          className="mb-6 sm:col-end-2"
          title="Has??a nie s?? jednakowe!"
          description="Has??a, kt??re wprowadzi??e??, nie s?? jednakowe. Upewnij si??, ??e s?? prawid??owe i spr??buj ponownie."
        />
      )}
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="flex flex-col items-start gap-y-12 sm:col-span-2 sm:gap-y-16"
      >
        <fieldset className="w-full flex flex-col gap-y-6  sm:grid sm:grid-cols-2 sm:gap-y-8 sm:gap-x-8">
          <Input type="text" name="fullName" label="Imi?? i nazwisko" placeholder="Jan Kowalski" />
          <Input type="email" name="email" label="Adres email" placeholder="jan@gmail.com" />
          <Input
            type="password"
            name="password"
            label={`Has??o (minimalnie ${MIN_PASSWORD_LENGTH} znak??w)`}
            minLength={MIN_PASSWORD_LENGTH}
          />
          <Input
            type="password"
            name="passwordConfirmation"
            label="Powt??rz has??o"
            minLength={MIN_PASSWORD_LENGTH}
          />
        </fieldset>

        <fieldset className="w-full flex flex-col">
          <legend className="mb-8 sm:w-1/2 sm:pr-4">
            <div className="flex gap-3 items-center mb-3">
              <Heading as="h2" variant="smBold" content="Dodatkowe informacje" />
              <Badge color="blue" textContent="Polecamy!" />
            </div>
            <Text content="Wype??nienie poni??szych p??l mo??e okaza?? si?? przydatne dla Twoich spo??eczno??ci." />
          </legend>
          <div className="flex flex-col gap-6 sm:grid sm:grid-cols-2 sm:gap-8">
            <Input
              type="tel"
              name="phoneNo"
              label="Numer telefonu"
              placeholder="123 456 789"
              required={false}
              pattern={SIMPLE_PHONE_PATTERN}
            />
            <Input
              type="text"
              name="address"
              label="Adres zamieszkania"
              placeholder="Ostrowiec ??wi??tokrzyski, ul. Sandomierska 2"
              required={false}
            />
          </div>
        </fieldset>

        <div className="flex gap-1 items-center lg:gap-2 lg:flex-col">
          <Button className="lg:w-80" type="submit" content="Zarejestruj si??" variant="primary" />
          <Text as="span" content="lub" />
          <Anchor className="lg:w-80" variant="plain" content="Utw??rz konto" href="/signin" />
        </div>
      </form>
    </Fragment>
  );
};
