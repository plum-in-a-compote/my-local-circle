import { useCallback } from 'react';
import { useAddCommunity } from '../../../hooks/useCreateCommunity';
import { CommunityFieldsSch } from '../../../validators/Community';
import { Heading } from '../../generic/Heading/Heading';
import { CreateCommunityForm } from '../CreateCommunityForm/CreateCommunityForm';
import { SuccessMessage } from '../../generic/SuccessMessage/SuccessMessage';

export const CreateCommunityPage = () => {
  const mutation = useAddCommunity();

  const handleSubmit = useCallback(
    (fields: CommunityFieldsSch) => {
      mutation.mutate(fields);
    },
    [mutation],
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
      {mutation.isSuccess && (
        <SuccessMessage title="Poprawnie utworzono Twoją nową społeczność! Za chwilę zostaniesz do niej przekierowany!" />
      )}
      <CreateCommunityForm onSubmit={handleSubmit} />
    </section>
  );
};
