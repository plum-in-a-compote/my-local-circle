import { useCallback } from 'react';
import { Heading } from '../../generic/Heading/Heading';
import { SuccessMessage } from '../../generic/SuccessMessage/SuccessMessage';
import { ErrorMessage } from '../../generic/ErrorMessage/ErrorMessage';
import { PingLoading } from '../../generic/PingLoading/PingLoading';
import { useRouter } from 'next/router';
import { ProjectForm } from '../ProjectForm/ProjectForm';
import { useCreateProject } from '../../../hooks/useCreateProject';
import { ProjectFields } from '../../../validators/Project';
import { BudgetPageProps } from '../BudgetPage/BudgetPage';

export const CreateProjectPage = ({ community, budget }: BudgetPageProps) => {
  const router = useRouter();
  const createProject = useCreateProject();

  const handleSubmit = useCallback(
    (fields: ProjectFields) => {
      createProject.mutate(fields, {
        // eslint-disable-next-line @typescript-eslint/no-misused-promises
        onSuccess: () => {
          const [communitySlug, budgetSlug] = budget.slug.split('/');
          return router.push(`/communities/${communitySlug}/budgets/${budgetSlug}`);
        },
      });
    },
    [budget.slug, createProject, router],
  );

  return (
    <section className="sm:grid sm:grid-cols-2 sm:gap-4">
      <Heading
        className="mb-4 sm:col-end-2"
        as="h1"
        content="Utwórz projekt"
        variant="base"
        displayDecorationBorder={true}
      />
      {createProject.isLoading && (
        <PingLoading message="W tym momencie sprawdzamy poprawność dawnych, za chwilę zostaniesz przekierowany na stronę budżetu." />
      )}
      {createProject.isError && (
        <ErrorMessage
          className="mb-6 sm:col-end-2"
          title="Nie udało się utworzyć projektu!"
          description="Wystąpił błąd wprowadzonych danych, sprawdź ich poprawność. Częstym błędem jest powtórzona nazwa społeczności, spróbuj wybrać inną. Jeśli nie możesz rozwiązać problemu, skontakuj się z administracją serwisu."
        />
      )}
      {createProject.isSuccess && (
        <SuccessMessage
          className="mb-6 sm:col-end-2"
          title="Poprawnie utworzono nowy projekt! Za chwilę zostaniesz przekierowany!"
        />
      )}
      <ProjectForm community={community} budget={budget} onSubmit={handleSubmit} />
    </section>
  );
};
