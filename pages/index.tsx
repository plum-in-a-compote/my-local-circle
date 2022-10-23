import type { NextPage } from 'next';
import Head from 'next/head';
import { HomePage } from '../components/composited/HomePage/HomePage';

import { MainLayout } from '../components/generic/MainLayout/MainLayout';

const Home: NextPage = () => {
  return (
    <MainLayout>
      <Head>
        <title>Strona główna - My Local Circle</title>
      </Head>
      <HomePage />
    </MainLayout>
  );
};

export default Home;
