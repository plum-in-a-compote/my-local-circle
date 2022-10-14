import { FormEventHandler, Fragment, useRef, useState } from 'react';
import { SignUpFields, SignUpFieldsSch } from '../../../validators/SignUpFields';
import { Badge } from '../../generic/Badge/Badge';
import { Button } from '../../generic/Button/Button';
import { Text } from '../../generic/Text/Text';
import { ErrorMessage } from '../../generic/ErrorMessage/ErrorMessage';
import { Heading } from '../../generic/Heading/Heading';
import { Input } from '../../generic/Input/Input';

type SignUpFormProps = {
  onSubmit: (fields: SignUpFields) => void;
};

export const SignUpForm = ({ onSubmit }: SignUpFormProps) => {
  const formRef = useRef<HTMLFormElement>(null);
  const [inputErrorMessage, setInputErrorMessage] = useState(false);

  // @todo passwords match
  //
  // const passwordForm = z
  // .object({
  //   password: z.string(),
  //   confirm: z.string(),
  // })
  // .refine((data) => data.password === data.confirm, {
  //   message: "Passwords don't match",
  //   path: ["confirm"], // path of error
  // })
  // .parse({ password: "asdf", confirm: "qwer" });

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    // in a way this is a redundant check, but it is more
    // strict than regular browser email regex
    const formData = new FormData(e.currentTarget);

    const result = SignUpFieldsSch.safeParse({
      name: formData.get('fullName'),
      email: formData.get('email'),
      password: formData.get('password'),
      phoneNo: formData.get('phone'),
      address: formData.get('address'),
    });

    if (result.success) {
      onSubmit(result.data);
      setInputErrorMessage(false);
    } else {
      setInputErrorMessage(true);
    }
  };

  return (
    <Fragment>
      {inputErrorMessage && (
        <ErrorMessage
          className="mb-6"
          title="Błąd danych wejściowych!"
          description="Wystąpił błąd danych wejściowych, sprawdź poprawność wpisanych danych. Jeśli błąd nie zniknie, skontaktuj się z administracją serwisu."
        />
      )}
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="flex flex-col items-start gap-y-12 sm:gap-y-16"
      >
        <fieldset className="w-full flex flex-col gap-y-6  sm:grid sm:grid-cols-2 sm:gap-y-8 sm:gap-x-8">
          <Input type="text" name="fullName" label="Imię i nazwisko" placeholder="Jan Kowalski" />
          <Input type="email" name="email" label="Adres email" placeholder="jan@gmail.com" />
          <Input
            type="password"
            name="password"
            label="Hasło (minimalnie 9 znaków)"
            minLength={9}
          />
          <Input type="password" name="passwordConfirmation" label="Powtórz hasło" minLength={9} />
        </fieldset>

        <fieldset className="w-full flex flex-col">
          <legend className="mb-8">
            <div className="flex gap-3 items-center mb-3">
              <Heading as="h2" variant="smBold" content="Dodatkowe informacje" />
              <Badge color="blue" textContent="Polecamy!" />
            </div>
            <Text content="Wypełnienie poniższych pól może okazać się przydatne dla Twoich społeczności." />
          </legend>
          <div className="flex flex-col gap-6 sm:grid sm:grid-cols-2 sm:gap-8">
            <Input
              type="tel"
              name="phone"
              label="Numer telefonu"
              placeholder="123 456 789"
              required={false}
            />
            <Input
              type="text"
              name="address"
              label="Adres zamieszkania"
              placeholder="Ostrowiec Świętokrzyski, ul. Sandomierska 2"
              required={false}
            />
          </div>
        </fieldset>

        <Button type="submit" content="Zarejestruj się" variant="primary" />
      </form>
    </Fragment>
  );
};
