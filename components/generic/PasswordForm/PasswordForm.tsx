import { ChangeEventHandler, MouseEventHandler, useCallback, useState } from 'react';
import { Button } from '../Button/Button';
import { Heading } from '../Heading/Heading';
import { Input } from '../Input/Input';

type PasswordFormFields = {
  oldPassword: string;
  newPassword: string;
  newPasswordConfirmation: string;
};

export const PasswordForm = () => {
  const [fields, setFields] = useState<PasswordFormFields>({
    oldPassword: '',
    newPassword: '',
    newPasswordConfirmation: '',
  });

  const handleInputChange: ChangeEventHandler<HTMLInputElement> = useCallback(
    ({ currentTarget }) => {
      setFields((previousFields) => ({
        ...previousFields,
        [currentTarget.name]: currentTarget.value,
      }));
    },
    [],
  );

  const handleSubmit: MouseEventHandler<HTMLButtonElement> = useCallback((e) => {
    e.preventDefault();
  }, []);

  const handleForgotPassword: MouseEventHandler<HTMLSpanElement> = useCallback(() => 1, []);

  return (
    <section className="flex flex-col gap-5 mt-12">
      <Heading as="h2" variant="smBold" content="Hasło" />
      <form className="flex flex-col gap-4">
        <Input
          name="oldPassword"
          label="Stare hasło"
          value={fields.oldPassword}
          type="password"
          onChange={handleInputChange}
        />
        <Input
          name="newPassword"
          label="Nowe hasło"
          value={fields.newPassword}
          type="password"
          onChange={handleInputChange}
        />
        <Input
          name="newPasswordConfirmation"
          label="Potwierdź nowe hasło"
          value={fields.newPasswordConfirmation}
          type="password"
          onChange={handleInputChange}
        />
        <div className="flex gap-7 mt-4 items-baseline">
          <Button className="w-28" variant="plain" content="Zmień hasło" onClick={handleSubmit} />
          <button
            className="text-xs leading-4 font-semibold text-blue-800 hover:underline focus:outline-none focus:ring focus:ring-blue-300 focus:rounded"
            onClick={handleForgotPassword}
          >
            Przypomnij hasło
          </button>
        </div>
      </form>
    </section>
  );
};
