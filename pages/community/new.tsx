import { NextPage } from 'next';
import Head from 'next/head';

import { CreateCommunityPage } from '../../components/composited/CreateCommunityPage/CreateCommunityPage';
import { Auth } from '../../components/generic/Auth/Auth';
import { MainLayout } from '../../components/generic/MainLayout/MainLayout';

const CreateCommunity: NextPage = () => {
  return (
    <Auth>
      <MainLayout>
        <Head>
          <title>Utwórz społeczność - My Local Circle</title>
        </Head>
        <CreateCommunityPage />
      </MainLayout>
    </Auth>
  );
};

export default CreateCommunity;
