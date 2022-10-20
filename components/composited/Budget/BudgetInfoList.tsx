type BudgetInfoItem = {
  label: string;
  value: string;
};

type BudgetInfoListProps = {
  items: BudgetInfoItem[];
};

export const BudgetInfoList = ({}: BudgetInfoListProps) => {
  return <ul className="list-none">{/* map */}</ul>;
};
