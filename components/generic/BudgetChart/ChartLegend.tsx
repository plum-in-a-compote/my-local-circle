import { formatCurrency } from '../../../utils/currency';
import { CircleIcon } from '../Icons/CircleIcon';

export type ChartLegendItem = {
  id?: number;
  circleFill: string;
  title: string;
  estimatedCost: number;
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
          <div className="flex gap-2">
            <span className="text-xs leading-4 font-normal text-gray-700">{l.title}</span>
            <span className="text-xs leading-4 font-normal text-gray-600">
              ({formatCurrency(l.estimatedCost)})
            </span>
          </div>
        </li>
      ))}
    </ul>
  );
};
