import { NextPage } from 'next';
import { GetStaticProps, GetStaticPaths } from 'next';
import Head from 'next/head';

import { MainLayout } from '../../components/generic/MainLayout/MainLayout';
import {
  CommunityPage,
  CommunityPageProps,
} from '../../components/composited/CommunityPage/CommunityPage';
import { getCommunityBySlug } from '../../lib/get/getCommunity';
import { getCommunities } from '../../lib/get/getCommunities';

export const getStaticPaths: GetStaticPaths = async () => {
  const communities = await getCommunities();

  return {
    paths: communities.map((c) => ({ params: { communitySlug: c.slug } })),
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps<CommunityPageProps> = async (context) => {
  if (!context.params) {
    return { props: null, notFound: true };
  }

  try {
    const id = context.params.communitySlug as string;
    const community = await getCommunityBySlug(id);

    return {
      props: {
        community,
      },
    };
  } catch (e) {
    return { props: null, notFound: true };
  }
};

const Community: NextPage<CommunityPageProps> = ({ community }) => {
  return (
    <MainLayout>
      <Head>
        <title>Ustawienia konta - My Local Circle</title>
      </Head>
      <CommunityPage community={community} />
    </MainLayout>
  );
};

export default Community;
