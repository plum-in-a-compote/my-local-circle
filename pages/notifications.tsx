import { NextPage } from 'next';
import Head from 'next/head';
import { NotificationsPage } from '../components/composited/NotificationsPage/NotificationsPage';
import { Container } from '../components/generic/Container/Container';

const Notifications: NextPage = () => {
  return (
    <Container as="main">
      <Head>
        <title>Powiadomienia - My Local Circle</title>
      </Head>
      <NotificationsPage />
    </Container>
  );
};

export default Notifications;
