import { clsx as cx } from 'clsx';
import { CircleIcon } from '../Icons/CircleIcon';

import { Project } from './types';

type ChartLegendProps = {
  projects: Project[];
};

export const ChartLegend = ({ projects }: ChartLegendProps) => {
  return (
    <ul className="flex flex-col gap-3 list-none">
      {projects.map((p) => (
        <li key={p.id} className="flex items-center gap-5">
          <CircleIcon width={8} height={8} className="fill-blue-500" />
          <span className="text-xs leading-4 font-normal text-gray-700">{p.name}</span>
        </li>
      ))}
    </ul>
  );
};
