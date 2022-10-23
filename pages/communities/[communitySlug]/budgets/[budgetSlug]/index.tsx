import { GetStaticPaths, NextPage } from 'next';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import {
  BudgetPage,
  BudgetPageProps,
} from '../../../../../components/composited/BudgetPage/BudgetPage';
import { MainLayout } from '../../../../../components/generic/MainLayout/MainLayout';

import { getBudgetPaths, getBudgetProps } from '../../../../../lib/next/budget';

export const getStaticPaths: GetStaticPaths = async (context) => getBudgetPaths(context);
export const getStaticProps: GetStaticProps<BudgetPageProps> = async (context) =>
  getBudgetProps(context);

const Budget: NextPage<BudgetPageProps> = ({ community, budget }) => {
  const title = `${budget.name} (${community.name}) - My Local Circle`;
  return (
    <MainLayout>
      <Head>
        <title>{title}</title>
      </Head>
      <BudgetPage budget={budget} community={community} />
    </MainLayout>
  );
};

export default Budget;
