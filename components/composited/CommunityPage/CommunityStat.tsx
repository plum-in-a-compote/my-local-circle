type CommunityStatProps = {
  name: string;
  value: string;
};

export const CommunityStat = ({ name, value }: CommunityStatProps) => {
  return (
    <div className="p-3 rounded bg-blue-50 border border-gray-500">
      <span className="mb-2 text-xs font-normal text-gray-600"></span>
      <span className="text-lg font-bold text-gray-800"></span>
    </div>
  );
};
