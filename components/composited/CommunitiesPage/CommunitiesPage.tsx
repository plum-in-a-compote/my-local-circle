import { Fragment } from 'react';
import { Community } from '../../../validators/Community';
import { CommunityCard } from '../../generic/CommunityCard/CommunityCard';
import { Heading } from '../../generic/Heading/Heading';

export type CommunitiesPageProps = {
  communities: Community[];
};

export const CommunitiesPage = ({ communities }: CommunitiesPageProps) => {
  return (
    <Fragment>
      <Heading
        className="mb-4"
        as="h1"
        variant="base"
        content="Społeczności"
        displayDecorationBorder={true}
      />
      <ul className="flex flex-col gap-4">
        {communities.map(({ city, name }) => {
          return (
            <li key={name}>
              <CommunityCard
                name={name}
                city={city}
                projectsNo={42}
                usersNo={31}
                description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt in dignissimos possimus cum fugit id!"
              />
            </li>
          );
        })}
      </ul>
    </Fragment>
  );
};
