import { NextPage } from 'next';
import Head from 'next/head';
import { CreateBudgetPage } from '../components/composited/CreateBudgetPage/CreateBudgetPage';
import { Container } from '../components/generic/Container/Container';

const CreateBudget: NextPage = () => {
  return (
    <Container as="main">
      <Head>
        <title>Zaloguj się - My Local Circle</title>
      </Head>
      <CreateBudgetPage />
    </Container>
  );
};

export default CreateBudget;
