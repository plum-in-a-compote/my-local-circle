type BudgetInfoItem = {
  label: string;
  value: string;
};

type BudgetInfoListProps = {
  items: BudgetInfoItem[];
};

export const BudgetInfoList = ({ items }: BudgetInfoListProps) => {
  return (
    <ul className="border-y border-gray-300 list-none">
      {items.map((item) => (
        <li key={item.label} className="flex justify-between px-3 py-2.5 odd:bg-gray-50">
          <span className="text-xs leading-4 font-normal text-gray-700">{item.label}</span>
          <span className="text-xs leading-4 font-semibold text-gray-800">{item.value}</span>
        </li>
      ))}
    </ul>
  );
};
