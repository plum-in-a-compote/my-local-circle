import { NextPage } from 'next';
import Head from 'next/head';
import { AccountPage } from '../components/composited/AccountPage/AccountPage';
import { MainLayout } from '../components/generic/MainLayout/MainLayout';

const Account: NextPage = () => {
  return (
    <MainLayout>
      <Head>
        <title>Ustawienia konta - My Local Circle</title>
      </Head>
      <AccountPage />
    </MainLayout>
  );
};

export default Account;
