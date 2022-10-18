import { CommunityIcon } from '../Icons/CommunityIcon';
import { CommunityQuickStats } from './CommunityQuickStats';

type CommunityCardProps = {
  name: string;
  description: string;
  city: string;
  projectsNo: number;
  usersNo: number;
};

export const CommunityCard = ({
  name,
  description,
  city,
  projectsNo,
  usersNo,
}: CommunityCardProps) => {
  return (
    <article className="flex flex-col gap-2 px-3 py-4 border border-gray-200 rounded">
      <div className="flex gap-2 items-end">
        <CommunityIcon />
        <h2 className="text-sm font-semibold text-blue-800">{name}</h2>
      </div>
      <p className="text-xs leading-5 font-normal text-gray-700">{description}</p>
      <CommunityQuickStats city={city} projectsNo={projectsNo} usersNo={usersNo} />
    </article>
  );
};
