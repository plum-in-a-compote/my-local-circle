import { NextPage } from 'next';
import { GetStaticProps } from 'next';
import Head from 'next/head';

import {
  CommunitiesPage,
  CommunitiesPageProps,
} from '../../components/composited/CommunitiesPage/CommunitiesPage';
import { getCommunities } from '../../lib/get/getCommunities';
import { MainLayout } from '../../components/generic/MainLayout/MainLayout';
import { REVALIDATE_EVERY_MINUTE } from '../../constants/fetch';
import { getLocaleForPage, Locale, LocalePageEntry } from '../../lib/locale/locale';
import { LocaleProvider } from '../../lib/locale/LocaleContext';

type PageProps = {
  locale: LocalePageEntry<'CommunitiesPage'>;
} & CommunitiesPageProps;

export const getStaticProps: GetStaticProps<PageProps> = async (context) => {
  const communities = await getCommunities();
  const localeEntry = getLocaleForPage(context.locale as Locale, 'CommunitiesPage');
  return {
    props: {
      communities,
      locale: localeEntry,
    },
    revalidate: REVALIDATE_EVERY_MINUTE,
  };
};

const Communities: NextPage<PageProps> = ({ communities, locale }) => {
  return (
    <LocaleProvider localeEntry={locale}>
      <MainLayout>
        <Head>
          <title>Społeczności - My Local Circle</title>
        </Head>
        <CommunitiesPage communities={communities} />
      </MainLayout>
    </LocaleProvider>
  );
};

export default Communities;
