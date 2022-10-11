import { ChangeEventHandler } from 'react';
import { Input } from '../Input/Input';
import { SignUpPageFields } from '../../composited/SignUpPage/SignUpPage';

type DetailsFormProps = {
  fields: SignUpPageFields;
  onInputChange: ChangeEventHandler<HTMLInputElement | HTMLSelectElement>;
};

export const DetailsForm = ({ fields, onInputChange }: DetailsFormProps) => {
  return (
    <form className="flex flex-col gap-y-6 mb-12 mt-5 sm:grid sm:grid-cols-2 sm:gap-x-9 sm:gap-y-8">
      <Input
        type="tel"
        name="phone"
        label="Numer telefonu"
        placeholder="123 456 789"
        value={fields.phone}
        onChange={onInputChange}
      />
      <Input
        type="text"
        name="address"
        label="Adres zamieszkania"
        placeholder="Ostrowiec Świętokrzyski, ul. Sandomierska 2"
        value={fields.address}
        onChange={onInputChange}
      />
    </form>
  );
};
