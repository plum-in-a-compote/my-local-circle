import { Fragment } from 'react';
import { AccountForm as AccountSection } from '../../generic/AccountForm/AccountForm';
import { Heading } from '../../generic/Heading/Heading';
import { PasswordForm as PasswordSection } from '../../generic/PasswordForm/PasswordForm';

export const AccountPage = () => {
  return (
    <Fragment>
      <section className="flex flex-col gap-4">
        <Heading as="h1" variant="base" content="Konto użytkownika" bottomBorder={true} />
        <AccountSection />
        <PasswordSection />
      </section>
    </Fragment>
  );
};
