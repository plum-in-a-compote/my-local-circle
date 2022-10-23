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
  const hasBudgets = Number(data?.length) > 0;

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
      {hasBudgets ? (
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
      ) : (
        <div className="w-full h-72 sm:h-80 lg:h-96 flex justify-center items-center">
          <hgroup className="flex flex-col items-center gap-1 sm:gap-2 lg:gap-7">
            <h1 className="text-3xl leading-8 font-bold text-gray-900 sm:text-4xl lg:text-5xl lg:leading-10">
              Pustka...
            </h1>
            <p className="text-base leading-6 font-normal text-gray-800 sm:text-xl lg:text-2xl">
              Jeśli chcesz zapełnić ekran, dodaj budżet (domyślnie odświeżamy strony budżetów co
              minutę)
            </p>
          </hgroup>
        </div>
      )}
    </section>
  );
};
