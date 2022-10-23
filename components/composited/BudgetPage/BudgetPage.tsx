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
import { ProjectsTab } from './ProjectsTab';
import { TimelineTab } from './TimelineTab';

export type BudgetPageProps = {
  community: Community;
  budget: SafeDateBudget;
};

export const BudgetPage = ({ community, budget }: BudgetPageProps) => {
  const [communitySlug, budgetSlug] = budget.slug.split('/');

  const { data: projects, isLoading } = useBudgetProjects(budget.id as number);

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
        {projects && <TimelineTab projects={projects} budget={budget} />}
      </TabSection>
      <TabSection value="projects">{projects && <ProjectsTab projects={projects} />}</TabSection>
    </section>
  );
};
