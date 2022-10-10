import { ChangeEventHandler } from 'react';
import { Input } from '../Input/Input';
import { Select } from '../Select/Select';
import { SignInPageFields } from './../../composited/SignInPage/SignInPage';

type MoreInformationFormProps = {
  fields: SignInPageFields;
  onInputChange: ChangeEventHandler<HTMLInputElement | HTMLSelectElement>;
};

export const MoreInformationForm = ({ fields, onInputChange }: MoreInformationFormProps) => {
  return (
    <form className="flex flex-col gap-y-6 mb-12 mt-5">
      <Input
        type="tel"
        name="phone"
        label="Numer telefonu"
        placeholder="123 456 789"
        value={fields.phone}
        onChange={onInputChange}
      />
      <Select
        name="gender"
        label="Płeć"
        options={[
          { name: 'm', value: 'Mężczyzna' },
          { name: 'w', value: 'Kobieta' },
        ]}
        value={fields.gender}
        onChange={onInputChange}
      />
    </form>
  );
};
