import { ChartColor } from './types';

export const calculateProjectWidthOnChart = (amount: number, totalAmount: number) => {
  return (amount / totalAmount) * 100;
};

// Initially we support only 8 colors
const PROJECT_NO_TO_COLOR: Record<number, ChartColor> = {
  0: 'blue',
  1: 'yellow',
  2: 'green',
  3: 'indigo',
  4: 'orange',
  5: 'teal',
  6: 'lime',
  7: 'fuchsia',
};

export const getProjectColor = (projectNo: number): ChartColor =>
  PROJECT_NO_TO_COLOR[projectNo % 8];

const COLOR_TO_TAILWIND_FILL: Record<ChartColor, string> = {
  blue: 'fill-blue-400',
  yellow: 'fill-yellow-400',
  green: 'fill-green-400',
  orange: 'fill-orange-400',
  teal: 'fill-teal-400',
  indigo: 'fill-indigo-400',
  fuchsia: 'fill-fuchsia-400',
  lime: 'fill-lime-400',
};

export const getColorFill = (color: ChartColor): string => COLOR_TO_TAILWIND_FILL[color];

const COLOR_TO_TAILWIND_BG: Record<ChartColor, string> = {
  blue: 'bg-blue-400',
  yellow: 'bg-yellow-400',
  green: 'bg-green-400',
  orange: 'bg-orange-400',
  teal: 'bg-teal-400',
  indigo: 'bg-indigo-400',
  fuchsia: 'bg-fuchsia-400',
  lime: 'bg-lime-400',
};

export const getColorBg = (color: ChartColor): string => COLOR_TO_TAILWIND_BG[color];
