import { NextPage } from 'next';
import { GetStaticProps, GetStaticPaths } from 'next';
import Head from 'next/head';

import { MainLayout } from '../../components/generic/MainLayout/MainLayout';
import {
  CommunityPage,
  CommunityPageProps,
} from '../../components/composited/CommunityPage/CommunityPage';
import { getCommunity } from '../../lib/get/getCommunity';

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: [{ params: { communitySlug: '1' } }, { params: { communitySlug: '2' } }],
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<CommunityPageProps> = async (context) => {
  const id = context.params!.communitySlug as string;
  const community = await getCommunity(id);

  return {
    props: {
      community,
    },
  };
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
