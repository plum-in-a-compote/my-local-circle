import { AccountIcon } from '../Icons/AccountIcon';
import { CommunityIcon } from '../Icons/CommunityIcon';
import { LocationFilledIcon } from '../Icons/LocationFilledIcon';
import { ProjectIcon } from '../Icons/ProjectIcon';

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
      <div className="flex gap-5">
        <div className="flex items-center gap-1">
          <LocationFilledIcon className="w-5 h-5 fill-amber-600" />
          <span className="text-xs font-normal text-gray-700">{city}</span>
        </div>
        <div className="flex items-center gap-1">
          <ProjectIcon className="w-5 h-5" />
          <span className="text-xs font-normal text-gray-700">{projectNo}</span>
        </div>
        <div className="flex items-center gap-1">
          <AccountIcon className="w-5 h-5" />
          <span className="text-xs font-normal text-gray-700">{usersNo}</span>
        </div>
      </div>
    </article>
  );
};
