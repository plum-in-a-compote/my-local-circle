import { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import { SignUpPage } from '../components/composited/SignUpPage/SignUpPage';
import { Container } from '../components/generic/Container/Container';
import { getLocaleForPage, Locale, LocalePageEntry } from '../lib/locale/locale';
import { LocaleProvider } from '../lib/locale/LocaleContext';

type PageProps = {
  locale: LocalePageEntry<'SignUp'>;
};

export const getStaticProps: GetStaticProps<PageProps> = (context) => {
  const localeEntry = getLocaleForPage(context.locale as Locale, 'SignUp');
  return {
    props: {
      locale: localeEntry,
    },
  };
};

const SignUp: NextPage<PageProps> = ({ locale }) => {
  return (
    <LocaleProvider localeEntry={locale}>
      <Container as="main" className="py-10 sm:py-12 lg:py-16">
        <Head>
          <title>{locale.title}</title>
        </Head>
        <SignUpPage />
      </Container>
    </LocaleProvider>
  );
};

export default SignUp;
