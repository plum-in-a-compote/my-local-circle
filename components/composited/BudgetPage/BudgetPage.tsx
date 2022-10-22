import { Budget } from '../../../validators/Budget';
import { Community } from '../../../validators/Community';
import { Heading } from '../../generic/Heading/Heading';

export type BudgetPageProps = {
  community: Community;
  budget: Budget;
};

export const BudgetPage = ({ community, budget }: BudgetPageProps) => {
  return (
    <section>
      <Heading
        className="mb-4 sm:col-end-2 sm:mb-8"
        as="h1"
        content="Budżety społeczności"
        variant="base"
        displayDecorationBorder={true}
      />
    </section>
  );
};
