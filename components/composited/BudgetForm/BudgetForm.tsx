import { useState, FormEventHandler, useRef, Fragment } from 'react';
import { BudgetFields, BudgetFieldsSch } from '../../../validators/Budget';
import { Button } from '../../generic/Button/Button';
import { ErrorMessage } from '../../generic/ErrorMessage/ErrorMessage';
import { Input } from '../../generic/Input/Input';
import { BudgetTypeRadio } from '../BudgetTypeRadio/BudgetTypeRadio';
import { Textarea } from '../../generic/Textarea/Textarea';
import { useUser } from '../../../hooks/useUser';
import { GENERIC_INPUT_ERROR_MSG } from '../../../constants/error';

type BudgetFormProps = {
  communityId: number | undefined;
  onSubmit: (fields: BudgetFields) => void;
};

export const BudgetForm = ({ communityId, onSubmit }: BudgetFormProps) => {
  const { data: user } = useUser();
  const formRef = useRef<HTMLFormElement>(null);
  const [inputErrorMessage, setInputErrorMessage] = useState(false);

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const result = BudgetFieldsSch.safeParse({
      name: formData.get('name'),
      description: formData.get('description'),
      budgetType: formData.get('budgetType'),
      estimatedCost: Number(formData.get('estimatedCost')),
      estimatedRealisationDate: formData.get('estimatedRealisationDate'),
      coordinator: user?.id,
      communityId,
    });

    if (result.success) {
      onSubmit(result.data);
      setInputErrorMessage(false);
      return;
    }

    setInputErrorMessage(true);
  };

  return (
    <Fragment>
      {inputErrorMessage && (
        <ErrorMessage
          className="mb-6 sm:col-end-2"
          title="Błąd danych wejściowych!"
          description={GENERIC_INPUT_ERROR_MSG}
        />
      )}
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="sm:grid sm:grid-cols-2 sm:gap-x-12 flex flex-col sm:items-start gap-4 sm:col-end-2"
      >
        <fieldset className="flex flex-col gap-4 lg:gap-6">
          <Input name="name" label="Nazwa" type="text" placeholder="SKS ZS3 Ostrowiec" />
          <Textarea name="description" label="Opis" />
          <Input name="estimatedRealisationDate" label="Przewidywana data realizacji" type="date" />
        </fieldset>

        <fieldset className="rounded mt-4 sm:mt-0">
          <Input
            className="mb-2 lg:mb-6"
            name="estimatedCost"
            label="Wielkość budżetu"
            type="text"
            unit="PLN"
            placeholder="1000"
          />
          <BudgetTypeRadio />
        </fieldset>
        <Button className="px-3 mt-10" content="Dodaj budżet" variant="primary" type="submit" />
      </form>
    </Fragment>
  );
};
