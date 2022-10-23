import { Fragment } from 'react';
import { CommunityWithExtraStats } from '../../../lib/get/getExtraStatsForCommunity';
import { CommunityCard } from '../../generic/CommunityCard/CommunityCard';
import { Heading } from '../../generic/Heading/Heading';
import { SmallCommunityAddIcon } from '../../generic/Icons/SmallCommunityAddIcon';
import { LinkWithIcon } from '../../generic/LinkWithIcon/LinkWithIcon';

export type CommunitiesPageProps = {
  communities: CommunityWithExtraStats[];
};

export const CommunitiesPage = ({ communities }: CommunitiesPageProps) => {
  return (
    <Fragment>
      <div className="flex items-baseline justify-between mb-4 border-b pb-4 border-dashed border-gray-400">
        <Heading as="h1" variant="base" content="Społeczności" />
        <LinkWithIcon
          icon={<SmallCommunityAddIcon className="fill-white" />}
          content="Nowa"
          variant="primary"
          href="/communities/new"
        />
      </div>
      <ul className="flex flex-col gap-4 sm:grid sm:grid-cols-2 sm:gap-x-4 sm:gap-y-6 lg:gap-8">
        {communities.map(({ city, name, slug, projectsNo, membersNo }) => {
          return (
            <li key={name}>
              <CommunityCard
                name={name}
                city={city}
                slug={slug}
                projectsNo={projectsNo}
                usersNo={membersNo}
                description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt in dignissimos possimus cum fugit id!"
              />
            </li>
          );
        })}
      </ul>
    </Fragment>
  );
};
