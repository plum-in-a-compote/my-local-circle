import { useMutation } from '@tanstack/react-query';

import { updateUser } from '../../../lib/post/updateUser';
import { Auth } from '../../generic/Auth/Auth';
import { AccountForm } from '../AccountForm/AccountForm';
import { PasswordForm } from '../../composited/PasswordForm/PasswordForm';
import { Heading } from '../../generic/Heading/Heading';
import { ErrorMessage } from '../../generic/ErrorMessage/ErrorMessage';
import { useRouter } from 'next/router';
import { PingLoading } from '../../generic/PingLoading/PingLoading';
import { updateUserPassword } from '../../../lib/post/updateUserPassword';
import { SuccessMessage } from '../../generic/SuccessMessage/SuccessMessage';

export const AccountPage = () => {
  const router = useRouter();
  const updateUserInfo = useMutation(updateUser, { onSuccess: () => router.reload() });
  const updatePassword = useMutation(updateUserPassword);

  return (
    <Auth>
      {updateUserInfo.isLoading && <PingLoading message="Aktualizowanie danych..." />}
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
          description="Sprawdź czy wprowadzone dane są poprawne i spróbuj ponownie. Błąd może być spowodowany krótkotrwałą przerwą w działaniu serwera.Jeśli nie możesz rozwiązać problemu, skontakuj się z administracją serwisu."
        />
      )}
      <AccountForm onSubmit={updateUserInfo.mutate} />
      <Heading className="mt-16 mb-5" as="h2" variant="smBold" content="Hasło" />

      {updatePassword.isLoading && <PingLoading message="Zmiana hasła..." />}
      {updatePassword.isSuccess && (
        <SuccessMessage className="mb-4" title="Pomyślnie zmieniono hasło" />
      )}
      <PasswordForm onSubmit={updatePassword.mutate} />
    </Auth>
  );
};
