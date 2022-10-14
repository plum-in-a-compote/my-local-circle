import { ChangeEventHandler } from 'react';
import { SignInFields } from '../../../validators/SignInFields';
import { Input } from '../../generic/Input/Input';

type SignInFormProps = {
  fields: SignInFields;
  onInputChange: ChangeEventHandler<HTMLInputElement>;
};

// The submit button could be displayed here, but to make it
// consistant with sign up page, we will use button higher in the hierarchy
export const SignInForm = ({ fields, onInputChange }: SignInFormProps) => {
  return (
    <form className="flex flex-col gap-y-6 sm:gap-y-8 sm:w-1/2 sm:pr-4">
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
    </form>
  );
};
