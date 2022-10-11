import { ChangeEventHandler, Fragment, useCallback, useState } from 'react';
import { Badge } from '../../generic/Badge/Badge';
import { Button } from '../../generic/Button/Button';
import { Heading } from '../../generic/Heading/Heading';
import { DetailsForm } from '../../generic/DetailsForm/DetailsForm';
import { SignInForm } from '../../generic/SignInForm/SignInForm';
import { Text } from '../../generic/Text/Text';
import { formatPhoneInput } from './formatPhoneInput';

export type SignInPageFields = {
  fullName: string;
  email: string;
  password: string;
  passwordConfirmation: string;
  phone: string;
  gender: 'm' | 'w';
  address: string;
};

export const SignInPage = () => {
  const [fields, setFields] = useState<SignInPageFields>({
    fullName: '',
    email: '',
    password: '',
    passwordConfirmation: '',
    phone: '',
    gender: 'm',
    address: '',
  });

  const handleInputChange: ChangeEventHandler<HTMLInputElement | HTMLSelectElement> = useCallback(
    ({ currentTarget }) => {
      const newValue =
        currentTarget.type === 'tel' ? formatPhoneInput(currentTarget.value) : currentTarget.value;

      setFields((previousFields) => ({
        ...previousFields,
        [currentTarget.name]: newValue,
      }));
    },
    [],
  );

  return (
    <Fragment>
      <section className="flex flex-col gap-3">
        <Heading as="h1" variant="base" content="Rejestracja" />
        <Text
          variant="xs"
          textContent="Konto jest potrzebne, aby utworzyć lokalną społeczność lub do niej dołączyć."
        />
        <SignInForm fields={fields} onInputChange={handleInputChange} />
      </section>
      <section className="flex flex-col gap-3">
        <div className="flex gap-3">
          <Heading as="h2" variant="smBold" content="Dodatkowe informacje" />
          <Badge color="blue" textContent="Polecamy!" />
        </div>
        <Text
          variant="xs"
          textContent="Wypełnienie poniższych pól może okazać się przydatne dla Twoich społeczności."
        />
        <DetailsForm fields={fields} onInputChange={handleInputChange} />
      </section>
      <div className="flex gap-4 mt-4">
        <Button variant="primary" content="Zarejestruj się" onClick={() => 1} />
        <Button variant="plain" content="Zachowaj dane" onClick={() => 1} />
      </div>
    </Fragment>
  );
};
