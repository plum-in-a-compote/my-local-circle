import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import { CommunityPageProps } from '../../../../components/composited/CommunityPage/CommunityPage';
import {
  CreateBudgetPage,
  CreateCommunityPageProps,
} from '../../../../components/composited/CreateBudgetPage/CreateBudgetPage';
import { Auth } from '../../../../components/generic/Auth/Auth';
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

const CreateBudget: NextPage<CreateCommunityPageProps> = ({ community }) => {
  return (
    <Auth>
      <MainLayout>
        <Head>
          <title>Nowy budżet - My Local Circle</title>
        </Head>
        <CreateBudgetPage community={community} />
      </MainLayout>
    </Auth>
  );
};

export default CreateBudget;
