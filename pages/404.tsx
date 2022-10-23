import type { NextPage } from 'next';
import Head from 'next/head';
import { MainLayout } from '../components/generic/MainLayout/MainLayout';

const NotFound: NextPage = () => {
  return (
    <MainLayout>
      <Head>
        <title>404 | Nie odnaleziono strony - My Local Circle</title>
        <meta
          name="description"
          content="Nie odnaleziono strony o podanym adresie URL. Zmień adres w pasku wyszukiwarki."
        />
      </Head>
      <div className="w-full h-72 sm:h-80 lg:h-96 flex justify-center items-center">
        <hgroup className="flex flex-col items-center gap-1 sm:gap-2 lg:gap-7">
          <h1 className="text-3xl leading-8 font-bold text-gray-900 sm:text-4xl lg:text-5xl lg:leading-10">
            404
          </h1>
          <p className="text-base leading-6 font-normal text-gray-800 sm:text-xl lg:text-2xl">
            Nie odnaleziono strony
          </p>
        </hgroup>
      </div>
    </MainLayout>
  );
};

export default NotFound;
