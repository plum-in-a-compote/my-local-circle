import { Community } from '../../../validators/Community';
import { Heading } from '../../generic/Heading/Heading';
import { CommunityStat } from './CommunityStat';

type CommunityPageProps = {
  community: Community;
};

export const CommunityPage = ({ community }: CommunityPageProps) => {
  return (
    <section>
      <Heading
        className="mb-4"
        as="h1"
        variant="base"
        content={community.name}
        displayDecorationBorder={true}
      />
      {/* Description */}
      <p className="text-xs leading-5 font-normal text-gray-700"></p>
      <CommunityStat name="Miasto" value={community.city} />
    </section>
  );
};
