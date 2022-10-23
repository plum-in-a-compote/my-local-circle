import { GetStaticPaths, GetStaticProps } from 'next';
import { DefaultCommunityPageProps } from '../../components/composited/CommunityPage/CommunityPage';
import { REVALIDATE_EVERY_MINUTE } from '../../constants/fetch';
import { getCommunities } from '../get/getCommunities';
import { getCommunityBySlug } from '../get/getCommunity';

export const getCommunityPaths: GetStaticPaths = async () => {
  const communities = await getCommunities();

  return {
    paths: communities.map((c) => ({ params: { communitySlug: c.slug } })),
    fallback: 'blocking',
  };
};

export const getCommunityProps: GetStaticProps<DefaultCommunityPageProps> = async (context) => {
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
      revalidate: REVALIDATE_EVERY_MINUTE,
    };
  } catch (e) {
    return { props: null, notFound: true };
  }
};
