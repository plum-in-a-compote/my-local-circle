import { NextPage } from 'next';
import Head from 'next/head';
import { SignUpPage } from '../components/composited/SignUpPage/SignUpPage';
import { Layout } from '../components/generic/Layout/Layout';

const SignIn: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>Zarejestruj się - My Local Circle</title>
      </Head>
      <SignUpPage />
    </Layout>
  );
};

export default SignIn;
