import { AccountIcon } from '../Icons/AccountIcon';
import { LocationFilledIcon } from '../Icons/LocationFilledIcon';
import { ProjectIcon } from '../Icons/ProjectIcon';

type CommunityQuickStatsProps = {
  city: string;
  projectsNo: number;
  usersNo: number;
};

export const CommunityQuickStats = ({ city, projectsNo, usersNo }: CommunityQuickStatsProps) => {
  return (
    <div className="flex flex-wrap gap-5">
      <div className="min-w-min flex items-center gap-1">
        <LocationFilledIcon className="fill-amber-500" />
        <span className="w-32 truncate text-xs font-normal text-gray-700">{city}</span>
      </div>
      <div className="flex items-center gap-1">
        <ProjectIcon />
        <span className="text-xs font-normal text-gray-700">{projectsNo}</span>
      </div>
      <div className="flex items-center gap-1">
        <AccountIcon />
        <span className="text-xs font-normal text-gray-700">{usersNo}</span>
      </div>
    </div>
  );
};
