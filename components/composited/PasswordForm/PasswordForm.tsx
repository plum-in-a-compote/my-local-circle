import { FormEventHandler, Fragment, useRef, useState } from 'react';

import { PasswordChangeFields, PasswordChangeSch } from '../../../validators/PasswordChange';
import { Button } from '../../generic/Button/Button';
import { Input } from '../../generic/Input/Input';
import { ErrorMessage } from '../../generic/ErrorMessage/ErrorMessage';
import { WarningMessage } from '../../generic/WarningMessage/WarningMessage';

type PasswordFormProps = {
  onSubmit: (fields: PasswordChangeFields) => void;
};

export const PasswordForm = ({ onSubmit }: PasswordFormProps) => {
  const formRef = useRef<HTMLFormElement>(null);
  const [inputErrorMessage, setInputErrorMessage] = useState(false);
  const [differentPasswords, setDifferentPasswords] = useState(false);

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const result = PasswordChangeSch.safeParse({
      oldPassword: formData.get('oldPassword'),
      newPassword: formData.get('newPassword'),
      newPasswordConfirmation: formData.get('newPasswordConfirmation'),
    });

    if (result.success) {
      // todo
      // when password is updated, user should get redirected to login page with a success toast
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
          title="Błąd danych wejściowych!"
          description="Wystąpił błąd danych wejściowych, sprawdź poprawność wpisanych danych. Jeśli błąd nie zniknie, skontaktuj się z administracją serwisu."
        />
      )}
      {differentPasswords && (
        <WarningMessage
          className="mb-6 sm:col-end-2"
          title="Hasła nie są jednakowe!"
          description="Hasła, które wprowadziłeś, nie są jednakowe. Upewnij się, że są prawidłowe i spróbuj ponownie."
        />
      )}
      <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-4">
        <Input name="oldPassword" label="Stare hasło" type="password" />
        <Input name="newPassword" label="Nowe hasło" type="password" minLength={8} />
        <Input
          name="newPasswordConfirmation"
          label="Potwierdź nowe hasło"
          type="password"
          minLength={8}
        />
        <Button className="w-fit mt-4" type="submit" variant="plain" content="Zmień hasło" />
      </form>
    </Fragment>
  );
};
