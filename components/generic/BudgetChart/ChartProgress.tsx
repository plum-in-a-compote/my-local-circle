import { clsx as cx } from 'clsx';

import { calculateProjectWidthOnChart, chartColorToTailwind } from './helpers';
import { Project } from './types';

type ChartProgressProps = {
  projects: Project[];
};

export const ChartProgress = ({ projects }: ChartProgressProps) => {
  const totalAmount = projects.reduce((acc, p) => acc + p.cost, 0);

  return (
    <span className="flex w-full h-4 rounded-lg overflow-hidden outline outline-1 outline-transparent">
      {projects.map((p) => (
        <span
          style={{
            width: `${calculateProjectWidthOnChart(p.cost, totalAmount)}%`,
            flexBasis: `${calculateProjectWidthOnChart(p.cost, totalAmount)}%`,
          }}
          key={p.id}
          aria-label={p.name}
          className={cx(
            'flex-1 outline outline-2 outline-transparent',
            chartColorToTailwind(p.color),
          )}
        ></span>
      ))}
    </span>
  );
};
