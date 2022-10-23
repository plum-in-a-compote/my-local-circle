import { useRequestToJoinCommunity } from '../../../hooks/useRequestToJoinCommunity';
import { useUser } from '../../../hooks/useUser';
import { useLocale } from '../../../lib/locale/LocaleContext';
import { Community } from '../../../validators/Community';
import { Auth } from '../../generic/Auth/Auth';
import { Button } from '../../generic/Button/Button';
import { Heading } from '../../generic/Heading/Heading';
import { CommunityStats } from './CommunityStats';

export type CommunityPageProps = {
  community: Community;
};

export const CommunityPage = ({ community }: CommunityPageProps) => {
  // After successful mutation, we have to invalidate whether user has applied
  const mutation = useRequestToJoinCommunity();
  const { data } = useUser();
  // @todo check if user is already in community

  const gl = useLocale<'CommunitiesPage'>();

  const handleJoinRequest = () => {
    const userId = data?.id;
    if (userId && community.id) {
      mutation.mutate({ userId, communityId: community.id });
    }
  };

  return (
    <section>
      <div className="mb-4">
        <Heading as="h1" variant="base" content={community.name} displayDecorationBorder={true} />
      </div>
      <p className="text-xs leading-5 font-normal text-gray-700 mb-6">{community.description}</p>
      <CommunityStats
        city={community.city}
        address={community.address}
        budgetsNo={4}
        projectsNo={53}
        usersNo={41}
        averageBudgetAmount={42000}
      />
      <p className="text-xs leading-5 font-normal text-gray-700 mb-6">
        {gl('beeingMemberRequired')}
      </p>
      <Auth forceRedirect={false}>
        <Button
          onClick={handleJoinRequest}
          variant="primary"
          content={gl('sendApplication')}
          type="button"
        />
      </Auth>
    </section>
  );
};
