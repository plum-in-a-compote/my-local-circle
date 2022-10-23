import { NextPage } from 'next';
import Head from 'next/head';
import { NotificationsPage } from '../components/composited/NotificationsPage/NotificationsPage';
import { Auth } from '../components/generic/Auth/Auth';
import { MainLayout } from '../components/generic/MainLayout/MainLayout';

const Notifications: NextPage = () => {
  return (
    // <Auth>
    <MainLayout>
      <Head>
        <title>Powiadomienia - My Local Circle</title>
      </Head>
      <NotificationsPage />
    </MainLayout>
    // </Auth>
  );
};

export default Notifications;
