import Image from 'next/image';
import { CoverImage } from './CoverImage';
import { HomeFeatureList } from './HomeFeatureList';

export const HomePage = () => {
  return (
    <section className="relative sm:grid sm:grid-cols-2 sm:gap-x-14">
      <div>
        <header className="pb-4 lg:pb-4">
          <h1 className="mb-2 pb-2 text-2xl leading-7 text-gray-800 font-bold text-center sm:text-start lg:text-3xl">
            Organizacja funduszy jest prosta i przyjemna.
          </h1>
          <p className="text-lg text-gray-500 text-center sm:text-start lg:text-xl">
            Uniwersalne podejście do pracy z Twoją lokalną społecznością i współpraca przy
            podejmowaniu finansowych decyzji.
          </p>
        </header>
        <h2 className="mt-6 mb-2 text-xl font-bold lg:text-2xl lg:mt-12">
          Przeglądaj budżety online
        </h2>
        <p className="text-base text-gray-500 lg:text-lg">
          Twórz społeczności, budżety i proponuj projekty innym członkom. Aktualizuj ich przebieg i
          bądż na bieżąco. To wszystko (i więcej) w jednym miejscu. Ułatwienie pracy dla Ciebie i
          twojej grupy.
        </p>
      </div>
      <CoverImage className="mt-8 sm:mt-0 lg:w-96">
        <Image
          layout="responsive"
          width={579}
          height={935}
          src="/../public/home-cover.png"
          alt="Preview of budget page"
        />
      </CoverImage>

      <div className="mt-12 col-span-2 sm:mt-16 lg:mt-0 sm:flex sm:flex-row-reverse sm:gap-14 sm:justify-between lg:gap-0">
        <HomeFeatureList />

        <CoverImage className="w-full mt-8 sm:mt-0 sm:w-1/2 lg:w-80 lg:mt-16 xl:w-96 xl:absolute xl:left-0 xl:bottom-56">
          <Image
            layout="responsive"
            width={517}
            height={795}
            src="/../public/home-cover-secondary.png"
            alt="Preview of project"
          />
        </CoverImage>
      </div>
    </section>
  );
};
