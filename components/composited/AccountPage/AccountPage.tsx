import { AccountForm } from '../AccountForm/AccountForm';
import { PasswordForm } from '../../composited/PasswordForm/PasswordForm';
import { Heading } from '../../generic/Heading/Heading';
import { Fragment } from 'react';

export const AccountPage = () => {
  return (
    <Fragment>
      <Heading
        className="mb-4"
        as="h1"
        variant="base"
        content="Konto użytkownika"
        bottomBorder={true}
      />
      <AccountForm />
      <Heading className="mt-12 mb-5" as="h2" variant="smBold" content="Hasło" />
      <PasswordForm onSubmit={() => 1} />
    </Fragment>
  );
};
