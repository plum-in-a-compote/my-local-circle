import { GetStaticPaths, NextPage } from 'next';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import {
  BudgetPage,
  BudgetPageProps,
} from '../../../../components/composited/BudgetPage/BudgetPage';
import { MainLayout } from '../../../../components/generic/MainLayout/MainLayout';
import { getCommunities } from '../../../../lib/get/getCommunities';
import { getBudgets } from '../../../../lib/get/getBudgets';
import { getCommunityBySlug } from '../../../../lib/get/getCommunity';
import { getBudgetBySlug } from '../../../../lib/get/getBudget';

export const getStaticPaths: GetStaticPaths = async () => {
  const communities = await getCommunities();
  const budgets = await Promise.all(
    communities.map((c) => {
      return getBudgets(c.id as number);
    }),
  );

  const paths = budgets.flatMap((bs) =>
    bs.map((b) => {
      const [communitySlug, budgetSlug] = b.slug.split('/');
      return {
        params: {
          communitySlug,
          budgetSlug,
        },
      };
    }),
  );

  return {
    paths,
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps<BudgetPageProps> = async (context) => {
  if (!context.params) {
    return { props: null, notFound: true };
  }

  try {
    const communitySlug = context.params.communitySlug as string;
    const community = await getCommunityBySlug(communitySlug);

    const budgetSlug = context.params.budgetSlug as string;
    const budget = await getBudgetBySlug(`${communitySlug}/${budgetSlug}`);

    return {
      props: {
        community,
        budget,
      },
    };
  } catch (e) {
    return { props: null, notFound: true };
  }
};

const Budget: NextPage<BudgetPageProps> = ({ community, budget }) => {
  return (
    <MainLayout>
      <Head>
        <title>Budżet - My Local Circle</title>
      </Head>
      <BudgetPage budget={budget} community={community} />
    </MainLayout>
  );
};

export default Budget;
