import { NextPage } from 'next';
import Head from 'next/head';
import { CreateCommunityPage } from '../../components/composited/CreateCommunityPage/CreateCommunityPage';
import { MainLayout } from '../../components/generic/MainLayout/MainLayout';

const CreateCommunity: NextPage = () => {
  return (
    <MainLayout>
      <Head>
        <title>Zaloguj się - My Local Circle</title>
      </Head>
      <CreateCommunityPage />
    </MainLayout>
  );
};

export default CreateCommunity;
