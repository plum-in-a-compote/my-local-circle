import { clsx as cx } from 'clsx';
import { ChartLegend } from './ChartLegend';
import { ChartProgress } from './ChartProgress';

import { Project } from './types';

type BudgetChartProps = {
  projects: Project[];
};

export const BudgetChart = ({ projects }: BudgetChartProps) => {
  return (
    <div className="flex flex-col gap-2">
      <ChartLegend projects={projects} />
      <ChartProgress projects={projects} />
    </div>
  );
};
