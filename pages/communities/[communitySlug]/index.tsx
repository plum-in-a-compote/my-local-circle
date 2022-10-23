import { NextPage } from 'next';
import { GetStaticProps, GetStaticPaths } from 'next';
import Head from 'next/head';

import { MainLayout } from '../../../components/generic/MainLayout/MainLayout';
import {
  CommunityPage,
  CommunityPageProps,
} from '../../../components/composited/CommunityPage/CommunityPage';

import { getCommunityPaths } from '../../../lib/next/community';
import { getCommunityBySlug } from '../../../lib/get/getCommunity';
import { getExtraStatsForCommunity } from '../../../lib/get/getExtraStatsForCommunity';
import { REVALIDATE_EVERY_MINUTE } from '../../../constants/fetch';

export const getStaticPaths: GetStaticPaths = async (context) => getCommunityPaths(context);

export const getStaticProps: GetStaticProps<CommunityPageProps> = async (context) => {
  if (!context.params) {
    return { props: null, notFound: true };
  }

  try {
    const slug = context.params.communitySlug as string;
    const community = await getCommunityBySlug(slug);
    const communityExtraStats = await getExtraStatsForCommunity(community);

    return {
      props: {
        community: communityExtraStats,
        revalidate: REVALIDATE_EVERY_MINUTE,
      },
    };
  } catch (e) {
    return { props: null, notFound: true };
  }
};

const Community: NextPage<CommunityPageProps> = ({ community }) => {
  const title = `${community.name} - My Local Circle`;
  return (
    <MainLayout>
      <Head>
        <title>{title}</title>
      </Head>
      <CommunityPage community={community} />
    </MainLayout>
  );
};

export default Community;
