import { CircleIcon } from '../Icons/CircleIcon';

export type ChartLegendItem = {
  id: string;
  circleFill: string;
  name: string;
};

type ChartLegendProps = {
  legends: ChartLegendItem[];
};

export const ChartLegend = ({ legends }: ChartLegendProps) => {
  return (
    <ul className="flex flex-col gap-2 list-none">
      {legends.map((l) => (
        <li key={l.id} className="flex items-center gap-5">
          <CircleIcon width={8} height={8} className={l.circleFill} />
          <span className="text-xs leading-4 font-normal text-gray-700">{l.name}</span>
        </li>
      ))}
    </ul>
  );
};
