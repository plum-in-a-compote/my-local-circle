import { NextPage } from 'next';
import Head from 'next/head';
import { AccountPage } from '../components/composited/AccountPage/AccountPage';
import { Container } from '../components/generic/Container/Container';

const Account: NextPage = () => {
  return (
    <Container as="main">
      <Head>
        <title>Ustawienia konta - My Local Circle</title>
      </Head>
      <AccountPage />
    </Container>
  );
};

export default Account;
