import { GetStaticPaths, GetStaticProps } from 'next';
import { BudgetPageProps } from '../../components/composited/BudgetPage/BudgetPage';
import { REVALIDATE_EVERY_MINUTE } from '../../constants/fetch';
import { getSafeStaticBudgetBySlug } from '../get/getBudget';
import { getBudgets } from '../get/getBudgets';
import { getCommunities } from '../get/getCommunities';
import { getCommunityBySlug } from '../get/getCommunity';

export const getBudgetPaths: GetStaticPaths = async () => {
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

export const getBudgetProps: GetStaticProps<BudgetPageProps> = async (context) => {
  if (!context.params) {
    return { props: null, notFound: true };
  }

  try {
    const communitySlug = context.params.communitySlug as string;
    const community = await getCommunityBySlug(communitySlug);

    const budgetSlug = context.params.budgetSlug as string;
    const budget = await getSafeStaticBudgetBySlug(`${communitySlug}/${budgetSlug}`);

    return {
      props: {
        community,
        budget,
      },
      revalidate: REVALIDATE_EVERY_MINUTE,
    };
  } catch (e) {
    return { props: null, notFound: true };
  }
};
