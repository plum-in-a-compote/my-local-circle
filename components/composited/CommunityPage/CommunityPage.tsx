import { useRequestToJoinCommunity } from '../../../hooks/useRequestToJoinCommunity';
import { useUser } from '../../../hooks/useUser';
import { Anchor } from '../../generic/Anchor/Anchor';
import { Button } from '../../generic/Button/Button';
import { Heading } from '../../generic/Heading/Heading';
import { CommunityStats } from './CommunityStats';
import { Text } from '../../generic/Text/Text';
import { useUserInCommunity } from '../../../hooks/useUserCommunities';
import { useUserJoinRequestTo } from '../../../hooks/useUserJoinRequests';
import { InfoMessage } from '../../generic/InfoMessage/InfoMessage';
import { Fragment } from 'react';
import { CommunityWithExtraStats } from '../../../lib/get/getExtraStatsForCommunity';
import { Community } from '../../../validators/Community';

export type DefaultCommunityPageProps = {
  community: Community;
};

export type CommunityPageProps = {
  community: CommunityWithExtraStats;
};

export const CommunityPage = ({ community }: CommunityPageProps) => {
  const requestToJoin = useRequestToJoinCommunity();
  const { data: user } = useUser();
  const userId = user?.id;

  const { data: inCommunity } = useUserInCommunity(community.id as number);
  const { data: hasRequestedToJoin } = useUserJoinRequestTo(community.id as number);
  const isAdmin = userId == community.adminId;
  const displayInCommunityMessage = inCommunity || isAdmin;

  const handleJoinRequest = () => {
    if (userId && community.id) {
      requestToJoin.mutate({ userId, communityId: community.id });
    }
  };

  return (
    <section className="sm:grid sm:grid-cols-2 sm:gap-x-3">
      <div className="mb-4 sm:col-span-2">
        <Heading as="h1" variant="base" content={community.name} displayDecorationBorder={true} />
      </div>
      <p className="text-sm leading-5 font-normal text-gray-700 mb-8 sm:text-base sm:mb-10 lg:text-lg sm:col-span-2">
        {community.description}
      </p>
      <CommunityStats
        city={community.city}
        address={community.address}
        budgetsNo={community.budgetsNo}
        projectsNo={community.projectsNo}
        usersNo={community.membersNo}
        averageBudgetAmount={community.averageBudgetAmount}
      />
      <p className="text-xs leading-5 font-normal text-gray-600 mb-6 sm:text-sm sm:col-end-2 sm:mb-8 lg:mb-12 lg:text-base">
        Docelowo dost??p do wi??kszej ilo??ci informacji b??dzie wy????cznie dla cz??onk??w danej
        spo??eczno??ci, jednak w tym momencie mo??esz przej???? bezpo??rednio na stron?? organizacji{' '}
        {community.name}.
      </p>
      {displayInCommunityMessage && (
        <InfoMessage
          className="sm:col-end-2 mb-5"
          title="Nale??ysz ju?? do tej spo??eczno??ci"
          description="Przejd?? na stron?? g????wn?? spo??eczno??ci, aby wy??wietli?? wi??cej informacji."
        />
      )}
      <Anchor
        className="sm:col-end-2 mb-2"
        variant="plain"
        content="Przejd?? do strony"
        href={`/communities/${community.slug}/budgets`}
      />
      {!displayInCommunityMessage && (
        <Fragment>
          <Text
            className="inline-block w-full sm:text-center sm:col-end-2 mb-2"
            as="span"
            content="lub"
          />
          <Button
            className="sm:col-end-2 mb-5"
            onClick={handleJoinRequest}
            disabled={Boolean(hasRequestedToJoin)}
            variant="primary"
            content="Wy??lij pro??b?? o do????czenie"
            type="button"
          />
        </Fragment>
      )}
      {hasRequestedToJoin && (
        <InfoMessage
          className="sm:col-end-2"
          title="Wys??a??e?? ju?? pro??b?? o do????czenie"
          description="Poczekaj na akceptacj?? przed administratora tej spo??eczno??ci."
        />
      )}
    </section>
  );
};
