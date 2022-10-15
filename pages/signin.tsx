import { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import { SignInPage } from '../components/composited/SignInPage/SignInPage';
import { Container } from '../components/generic/Container/Container';
import { getLocaleForPage, Locale, LocalePageEntry } from '../lib/locale/locale';
import { LocaleProvider } from '../lib/locale/LocaleContext';

type PageProps = {
  locale: LocalePageEntry<'SignInPage'>;
};

export const getStaticProps: GetStaticProps<PageProps> = (context) => {
  const localeEntry = getLocaleForPage(context.locale as Locale, 'SignInPage');
  return {
    props: {
      locale: localeEntry,
    },
  };
};

const SignIn: NextPage<PageProps> = ({ locale }) => {
  return (
    <LocaleProvider localeEntry={locale}>
      <Container as="main">
        <Head>
          <title>Zaloguj się - My Local Circle</title>
        </Head>
        <SignInPage />
      </Container>
    </LocaleProvider>
  );
};

export default SignIn;
