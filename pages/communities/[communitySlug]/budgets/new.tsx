import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import { CommunityPageProps } from '../../../../components/composited/CommunityPage/CommunityPage';
import {
  CreateBudgetPage,
  CreateCommunityPageProps,
} from '../../../../components/composited/CreateBudgetPage/CreateBudgetPage';
import { Auth } from '../../../../components/generic/Auth/Auth';
import { MainLayout } from '../../../../components/generic/MainLayout/MainLayout';
import { getCommunityPaths, getCommunityProps } from '../../../../lib/next/community';

export const getStaticPaths: GetStaticPaths = async (context) => getCommunityPaths(context);
export const getStaticProps: GetStaticProps<CommunityPageProps> = async (context) =>
  getCommunityProps(context);

const CreateBudget: NextPage<CreateCommunityPageProps> = ({ community }) => {
  return (
    <Auth>
      <MainLayout>
        <Head>
          <title>Nowy budżet - My Local Circle</title>
        </Head>
        <CreateBudgetPage community={community} />
      </MainLayout>
    </Auth>
  );
};

export default CreateBudget;
