export type ChartColor =
  | 'yellow'
  | 'green'
  | 'blue'
  | 'orange'
  | 'teal'
  | 'indigo'
  | 'fuchsia'
  | 'lime';

// Might be switched to inferred schema type
export type Project = {
  id?: number;
  title: string;
  estimatedCost: number;
};
