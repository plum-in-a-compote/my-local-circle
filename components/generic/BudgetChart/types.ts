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
  id: string;
  name: string;
  cost: number;
};
