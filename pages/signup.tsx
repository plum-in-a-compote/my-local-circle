import { NextPage } from 'next';
import Head from 'next/head';
import { SignUpPage } from '../components/composited/SignUpPage/SignUpPage';
import { Container } from '../components/generic/Container/Container';

const SignUp: NextPage = () => {
  return (
    <Container as="main" className="py-10 sm:py-12 lg:py-16">
      <Head>
        <title>Zarejestruj się - My Local Circle</title>
      </Head>
      <SignUpPage />
    </Container>
  );
};

export default SignUp;
