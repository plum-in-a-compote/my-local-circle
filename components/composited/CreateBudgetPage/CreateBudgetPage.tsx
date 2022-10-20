import { useMutation } from '@tanstack/react-query';
import { createBudget } from '../../../lib/post/createBudget';
import { ErrorMessage } from '../../generic/ErrorMessage/ErrorMessage';
import { Heading } from '../../generic/Heading/Heading';
import { SuccessMessage } from '../../generic/SuccessMessage/SuccessMessage';
import { BudgetForm } from '../BudgetForm/BudgetForm';

export const CreateBudgetPage = () => {
  const createNewBudget = useMutation(createBudget);

  return (
    <section>
      <Heading
        className="mb-4 sm:col-end-2 sm:mb-8"
        as="h1"
        content="Nowy budżet"
        variant="base"
        displayDecorationBorder={true}
      />
      {createNewBudget.isError && (
        <ErrorMessage
          className="mb-6 sm:col-end-2"
          title="Nie udało się zalogować!"
          description="Wystąpił błąd wprowadzonych danych, sprawdź ich poprawność. Jeśli nie możesz rozwiązać problemu, skontakuj się z administracją serwisu."
        />
      )}
      {createNewBudget.isSuccess && (
        <SuccessMessage
          className="my-6"
          title="Sukces! Nowy budżet został dodany do Twojej społeczności."
        />
      )}
      <BudgetForm onSubmit={createNewBudget.mutate} />
    </section>
  );
};
