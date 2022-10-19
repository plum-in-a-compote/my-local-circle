import {
  useState,
  ChangeEventHandler,
  useCallback,
  FormEventHandler,
  useRef,
  Fragment,
} from 'react';
import { BudgetFields, BudgetSch } from '../../../validators/BudgetFields';
import { Button } from '../../generic/Button/Button';
import { ErrorMessage } from '../../generic/ErrorMessage/ErrorMessage';
import { Input } from '../../generic/Input/Input';
import { Radio } from '../../generic/Radio/Radio';
import { Select } from '../../generic/Select/Select';
import { Text } from '../../generic/Text/Text';
import { TextArea } from '../../generic/TextArea/TextArea';

type BudgetFormProps = {
  onSubmit: (fields: BudgetFields) => void;
};

// TO BE FETCHED - DATA ABOUT USERS TO BE SET AS ADMIN
export const BudgetForm = ({ onSubmit }: BudgetFormProps) => {
  const formRef = useRef<HTMLFormElement>(null);
  const [checked, setChecked] = useState(true);
  const [inputErrorMessage, setInputErrorMessage] = useState(false);

  const handleRadioChange: ChangeEventHandler<HTMLInputElement> = useCallback(() => {
    setChecked((previousChecked) => !previousChecked);
  }, []);

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const result = BudgetSch.safeParse({
      name: formData.get('name'),
      description: formData.get('description'),
      budgetType: formData.get('budgetType'),
      estimatedCost: Number(formData.get('estimatedCost')),
    });

    if (result.success) {
      onSubmit(result.data);
      setInputErrorMessage(false);
      return;
    }

    console.log(result.error);
    setInputErrorMessage(true);
  };

  return (
    <Fragment>
      {inputErrorMessage && (
        <ErrorMessage
          className="mb-6 sm:col-end-2"
          title="Błąd danych wejściowych!"
          description="Wystąpił błąd wprowadzonych danych, sprawdź poprawność wpisanych danych. Jeśli błąd nie zniknie, skontaktuj się z administracją serwisu."
        />
      )}
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="sm:grid sm:grid-cols-2 sm:grid-rows-1 sm:gap-x-12 flex flex-col items-start gap-4 sm:col-end-2"
      >
        <fieldset className="flex flex-col gap-4">
          <Input name="name" label="Nazwa" type="text" placeholder="SKS ZS3 Ostrowiec" />
          <TextArea name="description" label="Opis" />
          <Select
            name="admin"
            label="Administrator"
            options={[
              // MOCKED DATA
              { name: 'Ja', value: 'moje_uid' },
              { name: 'Ty', value: 'twoje_uid' },
            ]}
          />
        </fieldset>

        <fieldset className="rounded mt-4">
          <Text className="mb-2" content="Typ budżetu" />
          <Radio
            className="border-x border-t rounded-t"
            name="budgetType"
            label="Narzucony z góry"
            description="Budżet narzucony z góry jest odpowiednim rozwiązaniem np. dla samorządów."
            value="static"
            checked={checked}
            onChange={handleRadioChange}
          />
          <Radio
            className="border-x border-b rounded-b"
            name="budgetType"
            label="Progresywny"
            description="Budżet progresywny jest bardzo użyteczny przy prowadzeniu składek na dane projekty."
            value="progressive"
            checked={!checked}
            onChange={handleRadioChange}
          />
          <Input
            className="mt-4"
            name="estimatedCost"
            label="Wielkość budżetu"
            type="text"
            unit="PLN"
            placeholder="1000"
          />
        </fieldset>

        <Button className="px-3 mt-10" content="Dodaj budżet" variant="primary" type="submit" />
      </form>
    </Fragment>
  );
};
