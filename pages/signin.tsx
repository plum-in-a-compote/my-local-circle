import { NextPage } from 'next';
import Head from 'next/head';
import { SignInPage } from '../components/composited/SignInPage/SignInPage';
import { Container } from '../components/generic/Container/Container';

const SignIn: NextPage = () => {
  return (
    <Container as="main" className="py-10 sm:py-12 lg:py-16">
      <Head>
        <title>Zaloguj się - My Local Circle</title>
      </Head>
      <SignInPage />
    </Container>
  );
};

export default SignIn;
