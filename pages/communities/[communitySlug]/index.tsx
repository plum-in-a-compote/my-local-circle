import { NextPage } from 'next';
import { GetStaticProps, GetStaticPaths } from 'next';
import Head from 'next/head';

import { MainLayout } from '../../../components/generic/MainLayout/MainLayout';
import {
  CommunityPage,
  CommunityPageProps,
} from '../../../components/composited/CommunityPage/CommunityPage';

import { getCommunityPaths, getCommunityProps } from '../../../lib/next/community';

export const getStaticPaths: GetStaticPaths = async (context) => getCommunityPaths(context);
export const getStaticProps: GetStaticProps<CommunityPageProps> = async (context) =>
  getCommunityProps(context);

const Community: NextPage<CommunityPageProps> = ({ community }) => {
  return (
    <MainLayout>
      <Head>
        <title>{community.name} - My Local Circle</title>
      </Head>
      <CommunityPage community={community} />
    </MainLayout>
  );
};

export default Community;
