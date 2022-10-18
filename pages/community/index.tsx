import { NextPage } from 'next';
import { GetStaticProps } from 'next';
import Head from 'next/head';

import { CommunityCard } from '../../components/generic/CommunityCard/CommunityCard';
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
  return (
    <Container as="main">
      <Head>
        <title>Ustawienia konta - My Local Circle</title>
      </Head>
      {communities.map(({ city, name }) => {
        return (
          <CommunityCard
            key={name}
            name={name}
            city={city}
            projectNo={42}
            usersNo={31}
            description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt in dignissimos possimus cum fugit id!"
          />
        );
      })}
    </Container>
  );
};

export default Account;
