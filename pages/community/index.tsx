import { NextPage } from 'next';
import { GetStaticProps } from 'next';
import Head from 'next/head';

import { Container } from '../../components/generic/Container/Container';
import { getCommunities } from '../../lib/get/getCommunities';
import { Community } from '../../validators/Community';

type PageProps = {
  communities: Community[];
};

export const getStaticProps: GetStaticProps<PageProps> = async () => {
  const communities = await getCommunities();

  return {
    props: {
      communities,
    },
  };
};

const Account: NextPage<PageProps> = ({ communities }) => {
  console.log(communities);
  return (
    <Container as="main">
      <Head>
        <title>Ustawienia konta - My Local Circle</title>
      </Head>
    </Container>
  );
};

export default Account;
