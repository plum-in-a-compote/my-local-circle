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
import { Text } from '../../generic/Text/Text';
import { TextArea } from '../../generic/TextArea/TextArea';

type BudgetFormProps = {
  onSubmit: (fields: BudgetFields) => void;
};

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
        className="flex flex-col items-start gap-4 sm:col-end-2"
      >
        <Input name="name" label="Nazwa" type="text" placeholder="SKS ZS3 Ostrowiec" />
        <TextArea name="description" label="Opis" />
        <fieldset className="rounded mb-6">
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
        </fieldset>
        <Input
          name="estimatedCost"
          label="Wielkość budżetu"
          type="text"
          unit="PLN"
          placeholder="1000"
        />
        <Button className="px-3 mt-10" content="Dodaj budżet" variant="primary" type="submit" />
      </form>
    </Fragment>
  );
};
