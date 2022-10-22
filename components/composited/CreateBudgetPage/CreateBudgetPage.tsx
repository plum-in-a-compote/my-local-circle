import { useMutation } from '@tanstack/react-query';
import { createBudget } from '../../../lib/post/createBudget';
import { Community } from '../../../validators/Community';
import { ErrorMessage } from '../../generic/ErrorMessage/ErrorMessage';
import { Heading } from '../../generic/Heading/Heading';
import { SuccessMessage } from '../../generic/SuccessMessage/SuccessMessage';
import { BudgetForm } from '../BudgetForm/BudgetForm';

export type CreateCommunityPageProps = {
  community: Community;
};

export const CreateBudgetPage = ({ community }: CreateCommunityPageProps) => {
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
          title="Nie udało się dodać budżetu!"
          description="Wystąpił błąd wprowadzonych danych, sprawdź ich poprawność. Częstym błędem jest powtórzona nazwa społeczności, spróbuj wybrać inną.Jeśli nie możesz rozwiązać problemu, skontakuj się z administracją serwisu."
        />
      )}
      {createNewBudget.isSuccess && (
        <SuccessMessage
          className="my-6"
          title="Sukces! Nowy budżet został dodany do Twojej społeczności."
        />
      )}
      <BudgetForm communityId={community.id} onSubmit={createNewBudget.mutate} />
    </section>
  );
};
