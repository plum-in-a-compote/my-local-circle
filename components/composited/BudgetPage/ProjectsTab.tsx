import { Fragment } from 'react';
import { Project } from '../../../validators/Project';
import { Heading } from '../../generic/Heading/Heading';
import { SmallAddIcon } from '../../generic/Icons/SmallAddIcon';
import { LinkWithIcon } from '../../generic/LinkWithIcon/LinkWithIcon';
import { ProjectCard } from '../ProjectCard/ProjectCard';
import { BudgetPageProps } from './BudgetPage';

type ProjectsTabProps = BudgetPageProps & {
  projects: Project[];
};

export const ProjectsTab = ({ projects, budget }: ProjectsTabProps) => {
  const [communitySlug, budgetSlug] = budget.slug.split('/');

  return (
    <Fragment>
      <div className="flex justify-between items-center pb-4 border-b border-dashed border-gray-400 mb-7">
        <Heading className="sm:col-end-2" as="h1" content="Aktywne podania" variant="base" />
        <LinkWithIcon
          icon={<SmallAddIcon className="fill-white" />}
          content="Nowe"
          variant="primary"
          // Change link
          href={`/communities/${communitySlug}/budgets/${budgetSlug}/new`}
        />
      </div>
      <ul className="flex flex-col gap-8">
        {projects.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </ul>
    </Fragment>
  );
};
