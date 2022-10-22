import { Community } from '../../../validators/Community';
import { Heading } from '../../generic/Heading/Heading';

type BudgetPageProps = {
  community: Community;
};

export const BudgetPage = ({ community }: BudgetPageProps) => {
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
