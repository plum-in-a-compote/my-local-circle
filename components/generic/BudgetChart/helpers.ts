import { ChartColor } from './types';

export const calculateProjectWidthOnChart = (amount: number, totalAmount: number) => {
  return (amount / totalAmount) * 100;
};

export const chartColorToTailwind = (chartColor: ChartColor): string => {
  switch (chartColor) {
    case 'yellow':
      return 'bg-yellow-400';
    case 'green':
      return 'bg-green-500';
    case 'blue':
      return 'bg-blue-500';
  }
};
