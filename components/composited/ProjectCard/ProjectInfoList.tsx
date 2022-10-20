type ProjectInfoItem = {
  label: string;
  value: string;
};

type ProjectInfoListProps = {
  items: ProjectInfoItem[];
};

export const ProjectInfoList = ({ items }: ProjectInfoListProps) => {
  return (
    <ul className="border-y border-gray-300 list-none">
      {items.map((item) => (
        <li key={item.label} className="flex justify-between px-3 py-2.5 odd:bg-gray-50">
          <span className="text-xs leading-4 font-normal text-gray-700">{item.label}</span>
          <span className="text-xs leading-4 font-semibold text-gray-800">
            {item.label === 'Przewidywany koszt' ? item.value + 'zł' : item.value}
          </span>
        </li>
      ))}
    </ul>
  );
};
