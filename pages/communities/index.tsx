import { NextPage } from 'next';
import { GetStaticProps } from 'next';
import Head from 'next/head';

import {
  CommunitiesPage,
  CommunitiesPageProps,
} from '../../components/composited/CommunitiesPage/CommunitiesPage';
import { getCommunities } from '../../lib/get/getCommunities';
import { MainLayout } from '../../components/generic/MainLayout/MainLayout';
import { REVALIDATE_EVERY_MINUTE } from '../../constants/fetch';

export const getStaticProps: GetStaticProps<CommunitiesPageProps> = async () => {
  const communities = await getCommunities();

  return {
    props: {
      communities,
    },
    revalidate: REVALIDATE_EVERY_MINUTE,
  };
};

const Communities: NextPage<CommunitiesPageProps> = ({ communities }) => {
  return (
    <MainLayout>
      <Head>
        <title>Społeczności - My Local Circle</title>
      </Head>
      <CommunitiesPage communities={communities} />
    </MainLayout>
  );
};

export default Communities;
