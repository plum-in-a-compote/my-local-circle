import { useBudgetProjects } from '../../../hooks/useBudgetProjects';
import { SafeDateBudget } from '../../../validators/Budget';
import { Community } from '../../../validators/Community';
import { Breadcrumbs } from '../../generic/Breadcrumbs/Breadcrumbs';
import { Heading } from '../../generic/Heading/Heading';
import { SMALL_HEIGHT, SMALL_WIDTH } from '../../generic/Icons/constants';
import { ProjectIcon } from '../../generic/Icons/ProjectIcon';
import { TimelineIcon } from '../../generic/Icons/TimelineIcon';
import { Tabs } from '../../generic/Tabs/Tabs';
import { TabSection } from '../../generic/Tabs/TabSection';

export type BudgetPageProps = {
  community: Community;
  budget: SafeDateBudget;
};

export const BudgetPage = ({ community, budget }: BudgetPageProps) => {
  const [communitySlug, budgetSlug] = budget.slug.split('/');
  const budgetType = budget.budgetType === 'static' ? 'Budżet narzucony' : 'Budżet progresywny';

  // voted / accepted
  const { data, isLoading } = useBudgetProjects(budget.id as number);
  console.log(data);

  return (
    <section>
      <Breadcrumbs
        className="mb-12"
        community={{ name: community.name, slug: communitySlug }}
        budget={{ name: budget.name, slug: budgetSlug }}
      />
      <Tabs
        className="mb-8"
        tabs={[
          { name: 'Linia czasu', value: 'timeline', icon: <TimelineIcon /> },
          {
            name: 'Podania',
            value: 'projects',
            icon: <ProjectIcon width={SMALL_WIDTH} height={SMALL_HEIGHT} />,
          },
        ]}
        defaultActiveTab="timeline"
      />
      <TabSection value="timeline">
        <span className="mb-1 text-xs leading-4 font-semibold text-gray-700">{budgetType}</span>
        <Heading
          className="mb-4 sm:col-end-2 sm:mb-8"
          as="h1"
          content={budget.name}
          variant="base"
        />
        <span className="text-lg leading-7 font-normal text-gray-800">400.00zł</span>
      </TabSection>
      <TabSection value="projects">Projects</TabSection>
    </section>
  );
};
