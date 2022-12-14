import { Fragment } from 'react';
import { formatCurrency } from '../../../utils/currency';
import { SafeDateBudget } from '../../../validators/Budget';
import { Project } from '../../../validators/Project';
import { BudgetChart } from '../../generic/BudgetChart/BudgetChart';
import { Heading } from '../../generic/Heading/Heading';
import { InfoMessage } from '../../generic/InfoMessage/InfoMessage';
import { Timeline } from '../Timeline/Timeline';

type TimelineTabProps = {
  projects: Project[];
  budget: SafeDateBudget;
};

export const TimelineTab = ({ projects, budget }: TimelineTabProps) => {
  const budgetType = budget.budgetType === 'static' ? 'Budżet narzucony' : 'Budżet progresywny';
  const total =
    budget.budgetType === 'static'
      ? budget.estimatedCost
      : projects.reduce((acc, p) => acc + p.estimatedCost, 0);

  return (
    <Fragment>
      <span className="mb-1 text-xs leading-4 font-semibold text-gray-700 sm:text-sm">
        {budgetType}
      </span>
      <Heading className="mb-4 sm:col-end-2 sm:mb-7" as="h1" content={budget.name} variant="base" />
      <span className="inline-block mb-4 text-lg leading-7 font-semibold text-gray-700 sm:text-2xl sm:mb-5">
        {formatCurrency(total)}
      </span>
      <BudgetChart projects={projects} />
      <InfoMessage
        className="my-4 sm:my-8 lg:my-12"
        title="Przykładowa linia czasu"
        description="W przyszłościu planujemy dodać linię czasu, tak będzie się prezentować."
      />
      <Timeline
        items={[
          {
            coordinatorName: 'Michał Markiewicz',
            projectName: 'Wyjście do kina',
            eventType: 'finished',
          },
          {
            coordinatorName: 'Bartłomiej Wiśniewski',
            projectName: 'Wyjście do kina',
            eventType: 'accepted',
          },
          {
            coordinatorName: 'Michał Ołubiec',
            projectName: 'Wyjście do kina',
            eventType: 'new',
          },
        ]}
      />
    </Fragment>
  );
};
