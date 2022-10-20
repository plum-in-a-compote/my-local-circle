type CommunityStatProps = {
  name: string;
  value: string;
};

export const CommunityStat = ({ name, value }: CommunityStatProps) => {
  return (
    <div className="flex flex-col p-3 rounded bg-gray-100">
      <span className="mb-2 text-xs font-normal text-gray-600">{name}</span>
      <span className="text-lg font-bold text-gray-800">{value}</span>
    </div>
  );
};
