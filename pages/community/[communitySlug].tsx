import { NextPage } from 'next';
import { GetStaticProps, GetStaticPaths } from 'next';
import Head from 'next/head';

import {
  CommunitiesPage,
  CommunitiesPageProps,
} from '../../components/composited/CommunitiesPage/CommunitiesPage';
import { getCommunities } from '../../lib/get/getCommunities';
import { MainLayout } from '../../components/generic/MainLayout/MainLayout';
import { getCommunity } from '../../lib/get/getCommunity';

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: [{ params: { communitySlug: '1' } }, { params: { communitySlug: '2' } }],
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const id = context.params!.communitySlug as string;
  const communities = await getCommunity(id);

  return {
    props: {
      communities,
    },
  };
};

const Community: NextPage<CommunitiesPageProps> = ({ communities }) => {
  return (
    <MainLayout>
      <Head>
        <title>Ustawienia konta - My Local Circle</title>
      </Head>
      <CommunitiesPage communities={communities} />
    </MainLayout>
  );
};

export default Community;
