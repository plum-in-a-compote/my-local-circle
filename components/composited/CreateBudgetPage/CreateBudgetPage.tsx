import { Heading } from '../../generic/Heading/Heading';
import { Input } from '../../generic/Input/Input';
import { TextArea } from '../../generic/TextArea/TextArea';

export const CreateBudgetPage = () => {
  return (
    <section className="sm:grid sm:grid-cols-2">
      <Heading
        className="mb-4 sm:col-end-2"
        as="h1"
        content="Nowy budżet"
        variant="base"
        displayDecorationBorder={true}
      />
      <form className="flex flex-col gap-4 sm:col-end-2">
        <Input name="name" label="Nazwa" type="text" placeholder="SKS ZS3 Ostrowiec" />
        <TextArea name="description" label="Opis" />
      </form>
    </section>
  );
};
