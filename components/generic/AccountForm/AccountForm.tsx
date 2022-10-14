import { ChangeEventHandler } from 'react';
import { MouseEventHandler, useCallback, useState } from 'react';
import { formatPhoneInput } from '../../../utils/formatPhoneInput';
import { Button } from '../Button/Button';
import { Checkbox } from '../Checkbox/Checkbox';
import { Input } from '../Input/Input';

type AccountFormFields = {
  fullName: string;
  email: string;
  address: string;
  phone: string;
  shareContactInfo: boolean;
};

export const AccountForm = () => {
  const [fields, setFields] = useState<AccountFormFields>({
    // Mocked data,
    fullName: 'Bartosz Wiśniowiecki',
    email: 'tonieja@gmail.com',
    address: '',
    phone: '',
    shareContactInfo: false,
  });

  const handleInputChange: ChangeEventHandler<HTMLInputElement> = useCallback(
    ({ currentTarget }) => {
      const value =
        currentTarget.type === 'tel' ? formatPhoneInput(currentTarget.value) : currentTarget.value;

      setFields((previousFields) => ({
        ...previousFields,
        [currentTarget.name]: value,
      }));
    },
    [],
  );

  const handleCheckboxChange: ChangeEventHandler<HTMLInputElement> = useCallback(() => {
    setFields((previousFields) => ({
      ...previousFields,
      shareContactInfo: !previousFields.shareContactInfo,
    }));
  }, []);

  const handleSubmit: MouseEventHandler<HTMLButtonElement> = useCallback((e) => {
    e.preventDefault();
  }, []);

  return (
    <form className="flex flex-col gap-4">
      <Input
        name="fullName"
        label="Imię i nazwisko"
        value={fields.fullName}
        type="text"
        onChange={handleInputChange}
      />
      <Input
        name="email"
        label="Adres email"
        value={fields.email}
        type="email"
        onChange={handleInputChange}
      />
      <Input
        name="address"
        label="Adres zamieszkania"
        tag="Opcjonalne"
        value={fields.address}
        type="text"
        onChange={handleInputChange}
      />
      <Input
        name="phone"
        label="Numer telefonu"
        tag="Opcjonalne"
        value={fields.phone}
        type="tel"
        onChange={handleInputChange}
      />
      <Checkbox
        name="shareContactInfo"
        label="Dane kontaktowe"
        description="Udostępnij swoje dane kontakowe osobom ze społeczności, do których należysz."
        isChecked={fields.shareContactInfo}
        onChange={handleCheckboxChange}
      />
      <Button className="w-32" content="Zapisz zmiany" variant="primary" onClick={handleSubmit} />
    </form>
  );
};
