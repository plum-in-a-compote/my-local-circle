import { GetStaticPaths, GetStaticProps } from 'next';
import { CommunityPageProps } from '../../components/composited/CommunityPage/CommunityPage';
import { getCommunities } from '../get/getCommunities';
import { getCommunityBySlug } from '../get/getCommunity';

export const getCommunityPaths: GetStaticPaths = async () => {
  const communities = await getCommunities();

  return {
    paths: communities.map((c) => ({ params: { communitySlug: c.slug } })),
    fallback: 'blocking',
  };
};

export const getCommunityProps: GetStaticProps<CommunityPageProps> = async (context) => {
  if (!context.params) {
    return { props: null, notFound: true };
  }

  try {
    const slug = context.params.communitySlug as string;
    const community = await getCommunityBySlug(slug);
    return {
      props: {
        community,
      },
    };
  } catch (e) {
    return { props: null, notFound: true };
  }
};
