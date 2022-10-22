import { GetStaticPaths, NextPage } from 'next';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import {
  BudgetsPage,
  BudgetsPageProps,
} from '../../../../components/composited/BudgetsPage/BudgetsPage';
import { MainLayout } from '../../../../components/generic/MainLayout/MainLayout';
import { getCommunityPaths, getCommunityProps } from '../../../../lib/next/community';

export const getStaticPaths: GetStaticPaths = async (context) => getCommunityPaths(context);
export const getStaticProps: GetStaticProps<BudgetsPageProps> = async (context) =>
  getCommunityProps(context);

const Budgets: NextPage<BudgetsPageProps> = ({ community }) => {
  return (
    <MainLayout>
      <Head>
        <title>Budżety społeczności - My Local Circle</title>
      </Head>
      <BudgetsPage community={community} />
    </MainLayout>
  );
};

export default Budgets;
