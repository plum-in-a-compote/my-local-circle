import { useState, FormEventHandler, useRef, Fragment } from 'react';
import { ProjectFields, ProjectFieldsSch } from '../../../validators/Project';
import { Button } from '../../generic/Button/Button';
import { ErrorMessage } from '../../generic/ErrorMessage/ErrorMessage';
import { Input } from '../../generic/Input/Input';
import { Textarea } from '../../generic/Textarea/Textarea';
import { useUser } from '../../../hooks/useUser';
import { GENERIC_INPUT_ERROR_MSG } from '../../../constants/error';

type ProjectFormProps = {
  budgetId: number | undefined;
  onSubmit: (fields: ProjectFields) => void;
};

export const ProjectForm = ({ onSubmit }: ProjectFormProps) => {
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
      // coordinator:
      // budgetId:
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
          <Input name="name" label="Tytuł" type="text" placeholder="Budowa boiska" />
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
