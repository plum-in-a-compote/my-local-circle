import { ChangeEventHandler, Fragment, MouseEventHandler, useCallback, useState } from 'react';
import { Badge } from '../../generic/Badge/Badge';
import { Button } from '../../generic/Button/Button';
import { Heading } from '../../generic/Heading/Heading';
import { DetailsForm } from '../../generic/DetailsForm/DetailsForm';
import { SignUpForm } from '../../generic/SignUpForm/SignUpForm';
import { Text } from '../../generic/Text/Text';
import { formatPhoneInput } from './formatPhoneInput';
import { useUser } from '../../../hooks/useUser';
import { ErrorAlert } from '../../generic/ErrorAlert/ErrorAlert';

export type SignUpFormFields = {
  fullName: string;
  email: string;
  password: string;
  passwordConfirmation: string;
  phone: string;
  address: string;
};

export const SignUpPage = () => {
  const { user } = useUser();

  console.log(user);

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
      <section className="mb-12">
        <Heading className="mb-3" as="h1" variant="base" content="Rejestracja" />
        <Text
          className="mb-12"
          content="Konto jest potrzebne, aby utworzyć lokalną społeczność lub do niej dołączyć."
        />
        <SignUpForm fields={fields} onInputChange={handleInputChange} />
      </section>
      <section className="mb-16 sm:mb-20 lg:mb-24">
        <div className="flex gap-3 items-center mb-3">
          <Heading as="h2" variant="smBold" content="Dodatkowe informacje" />
          <Badge color="blue" textContent="Polecamy!" />
        </div>
        <Text
          className="mb-12"
          content="Wypełnienie poniższych pól może okazać się przydatne dla Twoich społeczności."
        />
        <DetailsForm fields={fields} onInputChange={handleInputChange} />
      </section>
      <div className="flex gap-4 sm:gap-6 lg:gap-8">
        <Button variant="primary" content="Zarejestruj się" onClick={handleSubmit} />
        <Button variant="plain" content="Zachowaj dane" onClick={handleDataSave} />
      </div>
    </Fragment>
  );
};
