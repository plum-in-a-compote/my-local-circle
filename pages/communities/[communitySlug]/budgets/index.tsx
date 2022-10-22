import { GetStaticPaths, NextPage } from 'next';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import {
  BudgetsPage,
  BudgetsPageProps,
} from '../../../../components/composited/BudgetsPage/BudgetsPage';
import { MainLayout } from '../../../../components/generic/MainLayout/MainLayout';
import { getCommunities } from '../../../../lib/get/getCommunities';
import { getCommunityBySlug } from '../../../../lib/get/getCommunity';

export const getStaticPaths: GetStaticPaths = async () => {
  const communities = await getCommunities();

  return {
    paths: communities.map((c) => ({ params: { communitySlug: c.slug } })),
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps<BudgetsPageProps> = async (context) => {
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

const Communities: NextPage<BudgetsPageProps> = ({ community }) => {
  return (
    <MainLayout>
      <Head>
        <title>Budżety społeczności - My Local Circle</title>
      </Head>
      <BudgetsPage community={community} />
    </MainLayout>
  );
};

export default Communities;
