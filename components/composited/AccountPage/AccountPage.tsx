import { Fragment } from 'react';
import { AccountForm } from '../../generic/AccountForm/AccountForm';
import { Heading } from '../../generic/Heading/Heading';
import { PasswordForm } from '../../generic/PasswordForm/PasswordForm';
import { ThematicBreak } from '../../generic/ThematicBreak/ThematicBreak';

export const AccountPage = () => {
  return (
    <Fragment>
      <section className="flex flex-col gap-4">
        <Heading as="h1" variant="base" content="Konto użytkownika" />
        <ThematicBreak />
        <AccountForm />
        <PasswordForm />
      </section>
    </Fragment>
  );
};
