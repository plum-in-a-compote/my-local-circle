import { clsx as cx } from 'clsx';

import { calculateProjectWidthOnChart } from './helpers';

export type ChartProgressBar = {
  id?: number;
  barBg: string;
  title: string;
  estimatedCost: number;
};

type ChartProgressProps = {
  progressBars: ChartProgressBar[];
  // used on fixed budgets
  total?: number;
};

export const ChartProgress = ({ progressBars, total }: ChartProgressProps) => {
  const totalAmount = total ? total : progressBars.reduce((acc, p) => acc + p.estimatedCost, 0);

  return (
    <span className="flex w-full h-4 rounded-lg overflow-hidden outline outline-1 outline-transparent">
      {progressBars.map((p) => (
        <span
          style={{
            width: `${calculateProjectWidthOnChart(p.estimatedCost, totalAmount)}%`,
            flexBasis: `${calculateProjectWidthOnChart(p.estimatedCost, totalAmount)}%`,
          }}
          key={p.id}
          aria-label={p.title}
          className={cx('flex-1 outline outline-2 outline-transparent', p.barBg)}
        ></span>
      ))}
    </span>
  );
};
