import Image from 'next/image';
import { CoverImage } from './CoverImage';
import { HomeFeatureList } from './HomeFeatureList';

export const HomePage = () => {
  return (
    <section className="relative sm:grid sm:grid-cols-2 sm:gap-x-14">
      <div>
        <header className="pb-12">
          <h1 className="mb-2 pb-2 text-2xl leading-8 text-gray-800 font-bold text-center sm:text-start lg:text-3xl lg:leading-10">
            Organizacja funduszy jest prosta i przyjemna
          </h1>
          <p className="text-lg leading-8 text-gray-500 text-center sm:text-start lg:text-xl lg:leading-8">
            Uniwersalne podejście do pracy z Twoją lokalną społecznością i współpraca przy
            podejmowaniu finansowych decyzji.
          </p>
        </header>
        <h2 className="mt-6 mb-2 text-gray-800 text-xl font-bold lg:text-2xl lg:mt-12">
          Przeglądaj budżety online
        </h2>
        <p className="text-base leading-7 text-gray-500 lg:text-lg">
          Twórz społeczności, budżety i proponuj projekty innym członkom. Aktualizuj ich przebieg i
          bądż na bieżąco. To wszystko (i więcej) w jednym miejscu. Ułatwienie pracy dla Ciebie i
          twojej grupy.
        </p>
      </div>
      <CoverImage className="mt-12 sm:mt-0 lg:w-96">
        <img className="rounded lg:rounded-lg" src="/home-cover.png" alt="Preview of budget page" />
      </CoverImage>

      <div className="mt-16 col-span-2 sm:mt-16 lg:mt-0 sm:flex sm:flex-row-reverse sm:gap-14 sm:justify-between lg:gap-0">
        <HomeFeatureList />

        <CoverImage className="w-full mt-16 sm:mt-0 sm:w-1/2 lg:w-80 lg:mt-16 xl:w-96 xl:absolute xl:left-0 xl:bottom-56">
          <img
            className="rounded lg:rounded-lg"
            src="/home-cover-secondary.png"
            alt="Preview of project"
          />
        </CoverImage>
      </div>
    </section>
  );
};
