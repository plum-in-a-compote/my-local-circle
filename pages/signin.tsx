import { NextPage } from 'next';
import Head from 'next/head';
import { SignInPage } from '../components/composited/SignInPage/SignInPage';
import { Layout } from '../components/generic/Layout/Layout';

const SignIn: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>Zaloguj się - My Local Circle</title>
      </Head>
      <SignInPage />
    </Layout>
  );
};

export default SignIn;
