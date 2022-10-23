import { FormEventHandler, Fragment, useRef, useState } from 'react';

import { AccountFieldsSch, AccountFields } from '../../../validators/Account';
import { Button } from '../../generic/Button/Button';
import { Input } from '../../generic/Input/Input';
import { Checkbox } from '../../generic/Checkbox/Checkbox';
import { WarningMessage } from '../../generic/WarningMessage/WarningMessage';
import { ErrorMessage } from '../../generic/ErrorMessage/ErrorMessage';
import { GENERIC_INPUT_ERROR_MSG } from '../../../constants/error';
import { useUser } from '../../../hooks/useUser';

type AccountFormProps = {
  onSubmit: (fields: AccountFields) => void;
};

export const AccountForm = ({ onSubmit }: AccountFormProps) => {
  const formRef = useRef<HTMLFormElement>(null);
  const [inputErrorMessage, setInputErrorMessage] = useState(false);
  const [wrongPhoneFormat, setWrongPhoneFormat] = useState(false);
  const { data: user } = useUser();

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const result = AccountFieldsSch.safeParse({
      name: formData.get('fullName'),
      address: formData.get('address'),
      phoneNo: formData.get('phoneNo'),
    });

    if (result.success) {
      onSubmit(result.data);
      setInputErrorMessage(false);
      setWrongPhoneFormat(false);
      return;
    }

    const wrongPhoneFormat =
      result.error.issues.find((issue) => issue.code === 'custom')?.message ===
      'Not allowed phone number format.';
    if (wrongPhoneFormat) {
      setWrongPhoneFormat(true);
      return;
    }

    setWrongPhoneFormat(false);
    setInputErrorMessage(true);
  };

  return (
    <Fragment>
      {inputErrorMessage && (
        <ErrorMessage
          className="mb-6"
          title="Błąd wprowadzonych danych!"
          description={GENERIC_INPUT_ERROR_MSG}
        />
      )}
      {wrongPhoneFormat && (
        <WarningMessage
          className="mb-6"
          title="Niepoprawny format numeru telefonu!"
          description="Numer telefonu, który wprowadziłeś, ma zły format. Upewnij się, że wprowadzony numer jest zgodny z przedstawionym formatem."
        />
      )}
      <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-4">
        <Input
          name="fullName"
          label="Imię i nazwisko"
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
          defaultValue={user?.user_metadata?.name ?? ''}
          type="text"
        />
        <Input
          name="address"
          label="Adres zamieszkania"
          placeholder="Ostrowiec Świętokrzyski, ul. Sandomierska 2"
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
          defaultValue={user?.user_metadata?.address ?? ''}
          required={false}
          type="text"
        />
        <Input
          name="phoneNo"
          label="Numer telefonu"
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
          defaultValue={user?.user_metadata?.phoneNo ?? ''}
          required={false}
          type="tel"
        />
        <WarningMessage
          className="mb-4"
          title="Wsparcie wkrótce!"
          description="Udostępnianie danych kontaktowych to bardzo ważny temat, więc uznaliśmy, że podobne pole jest bardzo stosowne, niestety jeszcze go nie obsługujemy!"
        />
        <Checkbox
          name="shareContactInfo"
          label="Dane kontaktowe"
          description="Udostępnij swoje dane kontakowe osobom ze społeczności, do których należysz."
        />
        <Button className="w-fit mt-4" type="submit" content="Zapisz zmiany" variant="primary" />
      </form>
    </Fragment>
  );
};
