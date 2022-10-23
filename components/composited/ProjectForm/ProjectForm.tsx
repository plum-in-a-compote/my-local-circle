import { useState, FormEventHandler, useRef, Fragment } from 'react';
import { ProjectFields, ProjectFieldsSch } from '../../../validators/Project';
import { Button } from '../../generic/Button/Button';
import { ErrorMessage } from '../../generic/ErrorMessage/ErrorMessage';
import { Input } from '../../generic/Input/Input';
import { Textarea } from '../../generic/Textarea/Textarea';
import { useUser } from '../../../hooks/useUser';
import { GENERIC_INPUT_ERROR_MSG } from '../../../constants/error';
import { BudgetPageProps } from '../BudgetPage/BudgetPage';

type ProjectFormProps = BudgetPageProps & {
  onSubmit: (fields: ProjectFields) => void;
};

export const ProjectForm = ({ budget, onSubmit }: ProjectFormProps) => {
  const { data: user } = useUser();
  const formRef = useRef<HTMLFormElement>(null);
  const [inputErrorMessage, setInputErrorMessage] = useState(false);

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const result = ProjectFieldsSch.safeParse({
      title: formData.get('title'),
      description: formData.get('description'),
      estimatedCost: Number(formData.get('estimatedCost')),
      estimatedRealisationDate: formData.get('estimatedRealisationDate'),
      place: formData.get('place'),
      coordinator: user?.id,
      budgetId: budget.id,
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
          description={GENERIC_INPUT_ERROR_MSG}
        />
      )}
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="sm:col-span-2 sm:col-end-3 sm:grid sm:grid-cols-2 sm:gap-x-12 flex flex-col sm:items-start gap-4"
      >
        <fieldset className="flex flex-col gap-4 lg:gap-6">
          <Input name="title" label="Tytuł" type="text" placeholder="Budowa boiska" />
          <Input
            className="mb-2"
            name="place"
            label="Miejsce"
            type="text"
            placeholder="Ostrowiec Świętokrzyski"
          />
          <Textarea name="description" label="Opis" />
        </fieldset>

        <fieldset className="mt-4 sm:mt-0 flex flex-col gap-4 lg:gap-6">
          <Input name="estimatedRealisationDate" label="Przewidywana data realizacji" type="date" />
          <Input
            className="mb-2 lg:mb-6"
            name="estimatedCost"
            label="Kwota"
            type="text"
            unit="PLN"
            placeholder="1000"
          />
        </fieldset>
        <Button className="px-3 mt-10" content="Dodaj projekt" variant="primary" type="submit" />
      </form>
    </Fragment>
  );
};
