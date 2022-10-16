import { useMutation } from 'react-query';

import { updateUser } from '../../../lib/post/updateUser';
import { Auth } from '../../generic/Auth/Auth';
import { AccountForm } from '../AccountForm/AccountForm';
import { PasswordForm } from '../../composited/PasswordForm/PasswordForm';
import { Heading } from '../../generic/Heading/Heading';
import { ErrorMessage } from '../../generic/ErrorMessage/ErrorMessage';
import { SuccessMessage } from '../../generic/SuccessMessage/SuccessMessage';

export const AccountPage = () => {
  const updateUserInfo = useMutation(updateUser);

  return (
    <Auth>
      <Heading
        className="mb-4"
        as="h1"
        variant="base"
        content="Konto użytkownika"
        displayDecorationBorder={true}
      />
      {updateUserInfo.isError && (
        <ErrorMessage
          className="mb-6"
          title="Nie udało się zaktualizować danych!"
          description="Sprawdź czy wprowadzone dane są poprawne i spróbuj ponownie. Jeśli nie możesz rozwiązać problemu, skontakuj się z administracją serwisu."
        />
      )}
      {updateUserInfo.isSuccess && (
        <SuccessMessage className="mb-6" title="Poprawnie zaktualizowano dane!" />
      )}
      <AccountForm onSubmit={() => 1} />
      <Heading className="mt-16 mb-5" as="h2" variant="smBold" content="Hasło" />
      <PasswordForm onSubmit={() => 1} />
    </Auth>
  );
};
