export type ChartColor = 'yellow' | 'green' | 'blue';

export type Project = {
  id: string;
  name: string;
  cost: number;
  color: ChartColor;
};
