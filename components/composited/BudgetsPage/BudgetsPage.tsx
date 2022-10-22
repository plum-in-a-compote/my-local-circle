import { useBudgets } from '../../../hooks/useBudgets';
import { Community } from '../../../validators/Community';
import { Heading } from '../../generic/Heading/Heading';

export type BudgetsPageProps = {
  community: Community;
};

export const BudgetsPage = ({ community }: BudgetsPageProps) => {
  const { data } = useBudgets(community.id as number);

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
