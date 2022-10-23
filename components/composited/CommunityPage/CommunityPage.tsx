import { useUser } from '../../../hooks/useUser';

import { Fragment, useEffect, useState } from 'react';
import { CommunityWithExtraStats } from '../../../lib/get/getExtraStatsForCommunity';
import { Community } from '../../../validators/Community';
import { TabSection } from '../../generic/Tabs/TabSection';
import { Tab, Tabs } from '../../generic/Tabs/Tabs';
import { AdminPanel } from './AdminPanel';
import { CommunityInfo } from './CommunityInfo';

export type DefaultCommunityPageProps = {
  community: Community;
};

export type CommunityPageProps = {
  community: CommunityWithExtraStats;
};

export const CommunityPage = ({ community }: CommunityPageProps) => {
  const { data: user } = useUser();
  const userId = user?.id;
  const isAdmin = userId == community.adminId;

  const [tabs, setTabs] = useState<Tab<'info' | 'admin'>[]>([]);
  const hasTabs = Number(tabs?.length) > 0;

  useEffect(() => {
    if (isAdmin) {
      setTabs([
        { name: 'Informacje', value: 'info' },
        { name: 'Administracja', value: 'admin' },
      ]);

      window.location.hash = 'info';
      return;
    }
    return setTabs([]);
  }, [isAdmin]);

  useEffect(() => {
    if (hasTabs) {
      window.location.hash = 'info';
      return;
    }
  }, [hasTabs]);

  return (
    <div>
      {hasTabs ? (
        <Fragment>
          <Tabs className="mb-8" tabs={tabs} defaultActiveTab="info" />
          <TabSection value="info">
            <CommunityInfo community={community} />
          </TabSection>
          <TabSection value="admin">
            <AdminPanel communityId={community.id as number} />
          </TabSection>
        </Fragment>
      ) : (
        <CommunityInfo community={community} />
      )}
    </div>
  );
};
