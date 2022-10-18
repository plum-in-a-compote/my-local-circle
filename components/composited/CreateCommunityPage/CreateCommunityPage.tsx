import { Heading } from '../../generic/Heading/Heading';
import { Input } from '../../generic/Input/Input';
import { Text } from '../../generic/Text/Text';
import { TextArea } from '../../generic/TextArea/TextArea';

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
      <form className="flex flex-col gap-4 sm:col-end-2">
        <Input name="name" label="Nazwa" type="text" placeholder="SKS ZS3 Ostrowiec" />
        <Input
          name="city"
          label="Miejscowość / Miasto / Region"
          type="text"
          placeholder="Ostrowiec Św."
        />
        <TextArea name="description" label="Opis" />
        <Text content="Użytkownicy" as="span" />
        {/* 
          Todo by Bartek 
          User email input and added users list
        */}
      </form>
    </section>
  );
};
