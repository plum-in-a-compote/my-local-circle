import { ChangeEventHandler } from 'react';
import { Input } from '../Input/Input';
import { SignUpPageFields } from '../../composited/SignUpPage/SignUpPage';

type SignUpFormProps = {
  fields: SignUpPageFields;
  onInputChange: ChangeEventHandler<HTMLInputElement>;
};

export const SignUpForm = ({ fields, onInputChange }: SignUpFormProps) => {
  return (
    <form className="flex flex-col gap-y-6 mb-12 mt-5 sm:grid sm:grid-cols-2 sm:gap-x-9 sm:gap-y-8">
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
