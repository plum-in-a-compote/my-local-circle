import { ChangeEventHandler, Fragment, MouseEventHandler, useCallback, useState } from 'react';
import { Badge } from '../../generic/Badge/Badge';
import { Button } from '../../generic/Button/Button';
import { Heading } from '../../generic/Heading/Heading';
import { DetailsForm } from '../../generic/DetailsForm/DetailsForm';
import { SignUpForm } from '../../generic/SignUpForm/SignUpForm';
import { Text } from '../../generic/Text/Text';
import { formatPhoneInput } from './formatPhoneInput';

export type SignUpFormFields = {
  fullName: string;
  email: string;
  password: string;
  passwordConfirmation: string;
  phone: string;
  address: string;
};

export const SignUpPage = () => {
  const [fields, setFields] = useState<SignUpFormFields>({
    fullName: '',
    email: '',
    password: '',
    passwordConfirmation: '',
    phone: '',
    address: '',
  });

  const handleInputChange: ChangeEventHandler<HTMLInputElement | HTMLSelectElement> = useCallback(
    ({ currentTarget }) => {
      const value =
        currentTarget.type === 'tel' ? formatPhoneInput(currentTarget.value) : currentTarget.value;

      setFields((previousFields) => ({
        ...previousFields,
        [currentTarget.name]: value,
      }));
    },
    [],
  );

  const handleSubmit: MouseEventHandler<HTMLButtonElement> = useCallback(() => 1, []);
  const handleDataSave: MouseEventHandler<HTMLButtonElement> = useCallback(() => 1, []);

  return (
    <Fragment>
      <section className="flex flex-col gap-3">
        <Heading as="h1" variant="base" content="Rejestracja" />
        <Text content="Konto jest potrzebne, aby utworzyć lokalną społeczność lub do niej dołączyć." />
        <SignUpForm fields={fields} onInputChange={handleInputChange} />
      </section>
      <section className="flex flex-col gap-3">
        <div className="flex gap-3 items-center">
          <Heading as="h2" variant="smBold" content="Dodatkowe informacje" />
          <Badge color="blue" textContent="Polecamy!" />
        </div>
        <Text content="Wypełnienie poniższych pól może okazać się przydatne dla Twoich społeczności." />
        <DetailsForm fields={fields} onInputChange={handleInputChange} />
      </section>
      <div className="flex gap-4 mt-4 sm:mt-6 sm:gap-6 lg:gap-8">
        <Button variant="primary" content="Zarejestruj się" onClick={handleSubmit} />
        <Button variant="plain" content="Zachowaj dane" onClick={handleDataSave} />
      </div>
    </Fragment>
  );
};
