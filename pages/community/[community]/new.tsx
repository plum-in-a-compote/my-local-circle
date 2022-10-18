import { NextPage } from 'next';
import Head from 'next/head';
import { CreateBudgetPage } from '../../../components/composited/CreateBudgetPage/CreateBudgetPage';
import { Auth } from '../../../components/generic/Auth/Auth';
import { MainLayout } from '../../../components/generic/MainLayout/MainLayout';

const CreateBudget: NextPage = () => {
  return (
    <Auth>
      <MainLayout>
        <Head>
          <title>Nowy budżet - My Local Circle</title>
        </Head>
        <CreateBudgetPage />
      </MainLayout>
    </Auth>
  );
};

export default CreateBudget;
