import Link from 'next/link';
import { CommunityIcon } from '../Icons/CommunityIcon';
import { CommunityQuickStats } from './CommunityQuickStats';

type CommunityCardProps = {
  name: string;
  description: string;
  city: string;
  slug: string;
  projectsNo: number;
  usersNo: number;
};

export const CommunityCard = ({
  name,
  description,
  city,
  slug,
  projectsNo,
  usersNo,
}: CommunityCardProps) => {
  return (
    <Link href={`/community/${slug}`}>
      <a
        aria-label={`Przejdź do strony społeczności ${name}`}
        className="block group cursor-pointer transition focus:bg-blue-50 hover:bg-blue-50"
      >
        <article className="flex flex-col px-3 py-4 border border-gray-200 rounded transition group-hover:border-blue-200 group-focus:border-blue-200">
          <div className="flex gap-2 items-end mb-2">
            <CommunityIcon className="flex-shrink-0" />
            <h2 className="truncate text-sm font-semibold text-blue-800 group-hover:underline">
              {name}
            </h2>
          </div>
          <p className="mb-5 text-xs leading-5 font-normal text-gray-700">{description}</p>
          <CommunityQuickStats city={city} projectsNo={projectsNo} usersNo={usersNo} />
        </article>
      </a>
    </Link>
  );
};
