import { Heading } from '../../generic/Heading/Heading';
import { Text } from '../../generic/Text/Text';
import { Textarea } from '../../generic/Textarea/Textarea';
import { BudgetInfoList } from './BudgetInfoList';

type BudgetFields = {
  title: string;
  description: string;
  estimatedCost: string;
  estimatedRealizationDate: string;
  place: string;
  // TO BE DISCUSSED:
  // costPerPerson
};

type BudgetProps = {
  fields: BudgetFields;
};

export const Budget = ({ fields }: BudgetProps) => {
  return (
    <article>
      <Heading className="mb-3" content={fields.title} as="h2" variant="baseSemibold" />
      <Text className="mb-6 whitespace-pre-wrap w-5/6" as="p" content={fields.description} />
      <BudgetInfoList
        items={[
          {
            label: 'Przewidywany koszt',
            value: fields.estimatedCost,
          },
          {
            label: 'Data realizacji',
            value: fields.estimatedRealizationDate,
          },
          {
            label: 'Miejsce',
            value: fields.place,
          },
        ]}
      />
      <Textarea name="test" label="Test" />
    </article>
  );
};
