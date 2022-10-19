import { Heading } from '../../generic/Heading/Heading';
import { CreateCommunityForm } from '../CreateCommunityForm/CreateCommunityForm';

export const CreateCommunityPage = () => {
  return (
    <section className="sm:grid sm:grid-cols-2">
      <Heading
        className="mb-4 sm:col-end-2"
        as="h1"
        content="Utwórz lokalną społeczność"
        variant="base"
        displayDecorationBorder={true}
      />
      <CreateCommunityForm onSubmit={console.log} />
    </section>
  );
};
