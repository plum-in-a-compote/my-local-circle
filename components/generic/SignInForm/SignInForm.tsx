import { ChangeEventHandler } from 'react';
import { Input } from '../Input/Input';
import { SignInPageFields } from './../../composited/SignInPage/SignInPage';

type SignInFormProps = {
  fields: SignInPageFields;
  onInputChange: ChangeEventHandler<HTMLInputElement>;
};

export const SignInForm = ({ fields, onInputChange }: SignInFormProps) => {
  return (
    <form className="flex flex-col gap-y-6 mb-12 mt-5">
      <Input
        type="text"
        name="fullName"
        label="Imię i nazwisko"
        placeholder="Jan Kowalski"
        value={fields.fullName}
        onChange={onInputChange}
      />
      <Input
        type="email"
        name="email"
        label="Adres email"
        placeholder="jan@gmail.com"
        value={fields.email}
        onChange={onInputChange}
      />
      <Input
        type="password"
        name="password"
        label="Hasło"
        value={fields.password}
        onChange={onInputChange}
      />
      <Input
        type="password"
        name="passwordConfirmation"
        label="Powtórz hasło"
        value={fields.passwordConfirmation}
        onChange={onInputChange}
      />
    </form>
  );
};
