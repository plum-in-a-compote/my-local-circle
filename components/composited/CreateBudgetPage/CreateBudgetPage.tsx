import { useRouter } from 'next/router';
import { useCallback } from 'react';

import { useCreateBudget } from '../../../hooks/useCreateBudget';
import { BudgetFields } from '../../../validators/Budget';
import { Community } from '../../../validators/Community';
import { ErrorMessage } from '../../generic/ErrorMessage/ErrorMessage';
import { Heading } from '../../generic/Heading/Heading';
import { PingLoading } from '../../generic/PingLoading/PingLoading';
import { SuccessMessage } from '../../generic/SuccessMessage/SuccessMessage';
import { BudgetForm } from '../BudgetForm/BudgetForm';

export type CreateCommunityPageProps = {
  community: Community;
};

export const CreateBudgetPage = ({ community }: CreateCommunityPageProps) => {
  const router = useRouter();
  const createBudget = useCreateBudget();

  const handleSubmit = useCallback(
    (fields: BudgetFields) => {
      createBudget.mutate(fields, {
        // eslint-disable-next-line @typescript-eslint/no-misused-promises
        onSuccess: () => {
          return router.push(`/communities/`);
        },
      });
    },
    [createBudget, router],
  );

  return (
    <section>
      <Heading
        className="mb-4 sm:col-end-2 sm:mb-8"
        as="h1"
        content="Nowy budżet"
        variant="base"
        displayDecorationBorder={true}
      />
      {createBudget.isLoading && (
        <PingLoading message="W tym momencie sprawdzamy poprawność dawnych, za chwilę zostaniesz przekierowany na stronę nowego budżetu." />
      )}
      {createBudget.isError && (
        <ErrorMessage
          className="mb-6 sm:col-end-2"
          title="Nie udało się dodać budżetu!"
          description="Wystąpił błąd wprowadzonych danych, sprawdź ich poprawność. Częstym błędem jest powtórzona nazwa budżetu, spróbuj wybrać inną. Jeśli nie możesz rozwiązać problemu, skontakuj się z administracją serwisu."
        />
      )}
      {createBudget.isSuccess && (
        <SuccessMessage
          className="my-6"
          title="Sukces! Nowy budżet został dodany do Twojej społeczności."
        />
      )}
      <BudgetForm communityId={community.id} onSubmit={handleSubmit} />
    </section>
  );
};
