import { useCallback } from 'react';
import { useCreateCommunity } from '../../../hooks/useCreateCommunity';
import { CommunityFields } from '../../../validators/Community';
import { Heading } from '../../generic/Heading/Heading';
import { CreateCommunityForm } from '../CreateCommunityForm/CreateCommunityForm';
import { SuccessMessage } from '../../generic/SuccessMessage/SuccessMessage';
import { ErrorMessage } from '../../generic/ErrorMessage/ErrorMessage';
import { PingLoading } from '../../generic/PingLoading/PingLoading';
import { useRouter } from 'next/router';

export const CreateCommunityPage = () => {
  const router = useRouter();
  const createCommunity = useCreateCommunity();

  const handleSubmit = useCallback(
    (fields: CommunityFields) => {
      createCommunity.mutate(fields, {
        // eslint-disable-next-line @typescript-eslint/no-misused-promises
        onSuccess: () => {
          return router.push(`/communities/`);
        },
      });
    },
    [createCommunity, router],
  );

  return (
    <section className="sm:grid sm:grid-cols-2">
      <Heading
        className="mb-4 sm:col-end-2"
        as="h1"
        content="Utwórz lokalną społeczność"
        variant="base"
        displayDecorationBorder={true}
      />
      {createCommunity.isLoading && (
        <PingLoading message="W tym momencie sprawdzamy poprawność dawnych, za chwilę zostaniesz przekierowany na stronę społeczności." />
      )}
      {createCommunity.isError && (
        <ErrorMessage
          className="mb-6 sm:col-end-2"
          title="Nie udało się utworzyć społeczności!"
          description="Wystąpił błąd wprowadzonych danych, sprawdź ich poprawność. Częstym błędem jest powtórzona nazwa społeczności, spróbuj wybrać inną. Jeśli nie możesz rozwiązać problemu, skontakuj się z administracją serwisu."
        />
      )}
      {createCommunity.isSuccess && (
        <SuccessMessage
          className="mb-6 sm:col-end-2"
          title="Poprawnie utworzono Twoją nową społeczność! Za chwilę zostaniesz do niej przekierowany!"
        />
      )}
      <CreateCommunityForm onSubmit={handleSubmit} />
    </section>
  );
};
