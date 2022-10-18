import { CommunityIcon } from '../Icons/CommunityIcon';

type CommunityCardProps = {
  name: string;
  description: string;
  city: string;
  projectNo: number;
  usersNo: number;
};

export const CommunityCard = ({
  name,
  description,
  city,
  projectNo,
  usersNo,
}: CommunityCardProps) => {
  return (
    <article className="flex flex-col gap-2 px-3 py-4 border border-gray-200 rounded">
      <div className="flex gap-2">
        <CommunityIcon />
        <h2 className="text-sm font-semibold text-blue-800">{name}</h2>
      </div>
      <p className="text-xs leading-5 font-normal text-gray-700">{description}</p>
      <div></div>
    </article>
  );
};
