import { NextPage } from 'next';
import Head from 'next/head';
import { SignUpPage } from '../components/composited/SignUpPage/SignUpPage';
import { MainLayout } from '../components/generic/MainLayout/MainLayout';

const SignIn: NextPage = () => {
  return (
    <MainLayout>
      <Head>
        <title>Zarejestruj się - My Local Circle</title>
      </Head>
      <SignUpPage />
    </MainLayout>
  );
};

export default SignIn;
