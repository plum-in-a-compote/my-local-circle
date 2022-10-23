import { clsx as cx } from 'clsx';

import { calculateProjectWidthOnChart } from './helpers';

export type ChartProgressBar = {
  id: string;
  barBg: string;
  name: string;
  cost: number;
};

type ChartProgressProps = {
  progressBars: ChartProgressBar[];
  // used on fixed budgets
  total?: number;
};

export const ChartProgress = ({ progressBars, total }: ChartProgressProps) => {
  const totalAmount = total ? total : progressBars.reduce((acc, p) => acc + p.cost, 0);

  return (
    <span className="flex w-full h-4 rounded-lg overflow-hidden outline outline-1 outline-transparent">
      {progressBars.map((p) => (
        <span
          style={{
            width: `${calculateProjectWidthOnChart(p.cost, totalAmount)}%`,
            flexBasis: `${calculateProjectWidthOnChart(p.cost, totalAmount)}%`,
          }}
          key={p.id}
          aria-label={p.name}
          className={cx('flex-1 outline outline-2 outline-transparent', p.barBg)}
        ></span>
      ))}
    </span>
  );
};
