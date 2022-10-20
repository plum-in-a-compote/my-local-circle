import { Heading } from '../../generic/Heading/Heading';
import { Text } from '../../generic/Text/Text';

type BudgetProps = {
  title: string;
  description: string;
  estimatedCost: string;
  estimatedRealisationDate: string;
  place: string;
  // TO BE DISCUSSED:
  // costPerPerson
};

export const Budget = ({
  title,
  description,
  estimatedCost,
  estimatedRealisationDate,
  place,
}: BudgetProps) => {
  return (
    <article>
      <Heading content={title} className="font-semibold" as="h2" variant="base" />
      <Text as="p" content={description} />
    </article>
  );
};
