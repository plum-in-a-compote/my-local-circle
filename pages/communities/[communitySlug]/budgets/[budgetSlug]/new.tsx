import { GetStaticPaths, NextPage } from 'next';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import { BudgetPageProps } from '../../../../../components/composited/BudgetPage/BudgetPage';
import { CreateProjectPage } from '../../../../../components/composited/CreateProjectPage/ProjectPage';
import { Auth } from '../../../../../components/generic/Auth/Auth';
import { MainLayout } from '../../../../../components/generic/MainLayout/MainLayout';

import { getBudgetPaths, getBudgetProps } from '../../../../../lib/next/budget';

export const getStaticPaths: GetStaticPaths = async (context) => getBudgetPaths(context);
export const getStaticProps: GetStaticProps<BudgetPageProps> = async (context) =>
  getBudgetProps(context);

const CreateBudget: NextPage<BudgetPageProps> = ({ community, budget }) => {
  const title = `Nowy projekt (${budget.name}) - My Local Circle`;
  return (
    <MainLayout>
      <Auth>
        <Head>
          <title>{title}</title>
        </Head>
        <CreateProjectPage community={community} budget={budget} />
      </Auth>
    </MainLayout>
  );
};

export default CreateBudget;
