import { NextPage } from 'next';
import Head from 'next/head';
import { SignInPage } from '../components/composited/SignInPage/SignInPage';
import { MainLayout } from '../components/generic/MainLayout/MainLayout';

const SignIn: NextPage = () => {
  return (
    <MainLayout>
      <Head>
        <title>Zaloguj się - My Local Circle</title>
      </Head>
      <SignInPage />
    </MainLayout>
  );
};

export default SignIn;
