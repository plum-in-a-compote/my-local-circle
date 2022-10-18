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
    <div className="flex gap-5">
      <div className="flex items-center gap-1">
        <LocationFilledIcon className="w-5 h-5 fill-amber-500" />
        <span className="text-xs font-normal text-gray-700">{city}</span>
      </div>
      <div className="flex items-center gap-1">
        <ProjectIcon className="w-5 h-5" />
        <span className="text-xs font-normal text-gray-700">{projectsNo}</span>
      </div>
      <div className="flex items-center gap-1">
        <AccountIcon className="w-5 h-5" />
        <span className="text-xs font-normal text-gray-700">{usersNo}</span>
      </div>
    </div>
  );
};
