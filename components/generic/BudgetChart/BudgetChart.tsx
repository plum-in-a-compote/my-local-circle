type Project = {
  name: string;
  cost: number;
};

type BudgetChartProps = {
  projects: Project[];
};

export const BudgetChart = ({ projects }: BudgetChartProps) => {
  return (
    <span>
      <span aria-label="Budowa parku"></span>
      <span></span>
      <span></span>
    </span>
  );
};
