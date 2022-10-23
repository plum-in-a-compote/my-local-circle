import { useBudgets } from '../../../hooks/useBudgets';
import { useUser } from '../../../hooks/useUser';
import { formatDate } from '../../../utils/formatDate';
import { Community } from '../../../validators/Community';
import { BudgetItem } from '../../generic/BudgetItem/BudgetItem';
import { Heading } from '../../generic/Heading/Heading';
import { SmallCommunityAddIcon } from '../../generic/Icons/SmallCommunityAddIcon';
import { LinkWithIcon } from '../../generic/LinkWithIcon/LinkWithIcon';

export type BudgetsPageProps = {
  community: Community;
};

export const BudgetsPage = ({ community }: BudgetsPageProps) => {
  const { data: user } = useUser();
  const { data } = useBudgets(community.id as number);

  return (
    <section>
      <div className="flex items-baseline justify-between mb-8 pb-4 border-b border-dashed border-gray-400">
        <Heading as="h1" content={`Budżety społeczności - ${community.name}`} variant="base" />
        <LinkWithIcon
          icon={<SmallCommunityAddIcon className="fill-white" />}
          content="Nowy"
          variant="primary"
          href={`/communities/${community.slug}/budgets/new`}
        />
      </div>
      <ul className="flex flex-col gap-y-6 sm:grid sm:grid-cols-2 sm:gap-x-10 sm:gap-y-8 lg:gap-x-24 lg:gap-y-10">
        {data?.map((budget) => (
          <li key={`${budget.slug}${budget.communityId}`}>
            <BudgetItem
              title={budget.name}
              communityName={community.name}
              slug={budget.slug}
              description={budget.description}
              authored={budget.coordinator === user?.id}
              estimatedRealisationDate={formatDate(budget.estimatedRealisationDate)}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};
