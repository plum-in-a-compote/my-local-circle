import { FormEventHandler, Fragment, useRef, useState } from 'react';
import { AccountFieldsSch, AccountFields } from '../../../validators/Account';
import { Button } from '../../generic/Button/Button';
import { Checkbox } from '../../generic/Checkbox/Checkbox';
import { ErrorMessage } from '../../generic/ErrorMessage/ErrorMessage';
import { Input } from '../../generic/Input/Input';
import { WarningMessage } from '../../generic/WarningMessage/WarningMessage';
import { updateUser } from '../../../lib/post/updateUser';
import { useMutation } from 'react-query';
import { SuccessMessage } from '../../generic/SuccessMessage/SuccessMessage';

export const AccountForm = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [inputErrorMessage, setInputErrorMessage] = useState(false);
  const [updateSuccessMessage, setUpdateSuccessMessage] = useState(false);
  const [wrongPhoneFormat, setWrongPhoneFormat] = useState(false);

  // const update = useMutation(updateUser, { onSuccess: () => setUpdateSuccessMessage(true) });

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const result = AccountFieldsSch.safeParse({
      name: formData.get('fullName'),
      email: formData.get('email'),
      address: formData.get('address'),
      phoneNo: formData.get('phoneNo'),
      shareContactInfo: Boolean(formData.get('shareContactInfo')),
    });

    if (result.success) {
      // update.mutate(result.data);
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
          title="Błąd wprowadzonych danych!"
          description="Wystąpił błąd danych wejściowych, sprawdź poprawność wpisanych danych. Jeśli błąd nie zniknie, skontaktuj się z administracją serwisu."
        />
      )}
      {wrongPhoneFormat && (
        <WarningMessage
          title="Niepoprawny format numeru telefonu!"
          description="Numer telefonu, który wprowadziłeś, ma zły format. Upewnij się, że wprowadzony numer jest zgodny z przedstawionym formatem."
        />
      )}
      {updateSuccessMessage && (
        <SuccessMessage className="mb-6" title="Poprawnie zaktualizowano dane!" />
      )}
      <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-4">
        {/* Placeholder default values, because we need to make DB call for custom user table */}
        <Input
          name="fullName"
          label="Imię i nazwisko"
          defaultValue="Bartosz Wiśniowiecki"
          type="text"
        />
        <Input name="email" label="Adres email" defaultValue="bartosz@gmail.com" type="email" />
        <Input
          name="address"
          label="Adres zamieszkania"
          placeholder="Ostrowiec Świętokrzyski, ul. Sandomierska 2"
          tag="Opcjonalne"
          required={false}
          type="text"
        />
        <Input
          name="phoneNo"
          label="Numer telefonu"
          placeholder="123 456 789"
          tag="Opcjonalne"
          required={false}
          type="tel"
        />
        <Checkbox
          name="shareContactInfo"
          label="Dane kontaktowe"
          description="Udostępnij swoje dane kontakowe osobom ze społeczności, do których należysz."
        />
        <Button className="w-32" type="submit" content="Zapisz zmiany" variant="primary" />
      </form>
    </Fragment>
  );
};
