import { ChartLegend, ChartLegendItem } from './ChartLegend';
import { ChartProgress, ChartProgressBar } from './ChartProgress';
import { getColorBg, getColorFill, getProjectColor } from './helpers';

import { Project } from './types';

type BudgetChartProps = {
  projects: Project[];
};

export const BudgetChart = ({ projects }: BudgetChartProps) => {
  const legends = projects.map<ChartLegendItem>((p, i) => ({
    ...p,
    circleFill: getColorFill(getProjectColor(i)),
  }));

  const progressBars = projects.map<ChartProgressBar>((p, i) => ({
    ...p,
    barBg: getColorBg(getProjectColor(i)),
  }));

  return (
    <div className="flex flex-col gap-2">
      <ChartLegend legends={legends} />
      <ChartProgress progressBars={progressBars} />
    </div>
  );
};
