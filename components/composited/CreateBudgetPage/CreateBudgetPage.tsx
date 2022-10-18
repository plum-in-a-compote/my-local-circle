import { Fragment } from 'react';
import { Heading } from '../../generic/Heading/Heading';
import { Input } from '../../generic/Input/Input';
import { TextArea } from '../../generic/TextArea/TextArea';

export const CreateBudgetPage = () => {
  return (
    <Fragment>
      <Heading
        as="h1"
        content="Tworzenie społeczności"
        variant="base"
        displayDecorationBorder={true}
      />
      <form>
        <Input name="name" label="Nazwa" type="text" placeholder="SKS ZS3 Ostrowiec" />
        <Input
          name="city"
          label="Miejscowość / Miasto / Region"
          type="text"
          placeholder="Ostrowiec Św."
        />
        <TextArea name="description" label="Opis" />
        {/* Make number for post */}
        <Input
          name="budgetAmount"
          label="Wielkość budżetu"
          type="text"
          placeholder="0.00"
          unit="PLN"
        />
      </form>
    </Fragment>
  );
};
