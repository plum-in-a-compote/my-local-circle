import { ChangeEventHandler, Fragment, useCallback, useState } from 'react';
import { Badge } from '../../generic/Badge/Badge';
import { Button } from '../../generic/Button/Button';
import { Heading } from '../../generic/Heading/Heading';
import { MoreInformationForm } from '../../generic/MoreInformationForm.tsx/MoreInformationForm';
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
      const newValue = formatPhoneInput(currentTarget.value);

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
        <Heading as="h1" variant="base" textContent="Rejestracja" />
        <Text
          as="p"
          variant="xs"
          textContent="Konto jest potrzebne, aby utworzyć lokalną społeczność lub do niej dołączyć."
        />
        <SignInForm fields={fields} onInputChange={handleInputChange} />
      </section>
      <section className="flex flex-col gap-3">
        <div className="flex gap-3">
          <Heading as="h2" variant="smBold" textContent="Dodatkowe informacje" />
          <Badge color="blue" textContent="Polecamy!" />
        </div>
        <Text
          as="p"
          variant="xs"
          textContent="Wypełnienie poniższych pól może okazać się przydatne dla Twoich społeczności."
        />
        <MoreInformationForm fields={fields} onInputChange={handleInputChange} />
      </section>
      <div className="flex gap-4 mt-4">
        <Button variant="primary" content="Zarejestruj się" onClick={() => 1} />
        <Button variant="plain" content="Zachowaj dane" onClick={() => 1} />
      </div>
    </Fragment>
  );
};
