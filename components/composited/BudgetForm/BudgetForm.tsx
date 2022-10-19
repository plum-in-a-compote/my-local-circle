import { useState, FormEventHandler, useRef, Fragment } from 'react';
import { BudgetFields, BudgetSch } from '../../../validators/BudgetFields';
import { Button } from '../../generic/Button/Button';
import { ErrorMessage } from '../../generic/ErrorMessage/ErrorMessage';
import { Input } from '../../generic/Input/Input';
import { BudgetTypeRadio } from '../BudgetTypeRadio/BudgetTypeRadio';
import { Select } from '../../generic/Select/Select';
import { Text } from '../../generic/Text/Text';
import { Textarea } from '../../generic/Textarea/Textarea';

type BudgetFormProps = {
  onSubmit: (fields: BudgetFields) => void;
};

// TO BE FETCHED - DATA ABOUT USERS TO BE SET AS ADMIN
export const BudgetForm = ({ onSubmit }: BudgetFormProps) => {
  const formRef = useRef<HTMLFormElement>(null);
  const [inputErrorMessage, setInputErrorMessage] = useState(false);

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
        className="sm:grid sm:grid-cols-2 sm:gap-x-12 flex flex-col sm:items-start gap-4 sm:col-end-2"
      >
        <fieldset className="flex flex-col gap-4">
          <Input name="name" label="Nazwa" type="text" placeholder="SKS ZS3 Ostrowiec" />
          <Textarea name="description" label="Opis" />
          <div className="grid-col-2">
            <Select
              name="admin"
              label="Administrator"
              options={[
                // MOCKED DATA
                { name: 'Ja', value: 'moje_uid' },
                { name: 'Ty', value: 'twoje_uid' },
              ]}
            />
          </div>
        </fieldset>

        <fieldset className="rounded mt-4 sm:mt-0">
          <Input
            className="mb-2"
            name="estimatedCost"
            label="Wielkość budżetu"
            type="text"
            unit="PLN"
            placeholder="1000"
          />
          <Text className="mt-4 mb-2" content="Typ budżetu" />
          <BudgetTypeRadio />
        </fieldset>

        <Button className="px-3 mt-10" content="Dodaj budżet" variant="primary" type="submit" />
      </form>
    </Fragment>
  );
};
