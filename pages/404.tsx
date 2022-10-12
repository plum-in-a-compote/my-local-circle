import type { NextPage } from 'next';
import Image from 'next/image';
import vectors from '../public/404.svg';
import { Text } from '../components/generic/Text/Text';

const ErrorPage: NextPage = () => {
  return (
    <div>
      <div className="flex m-2 mt-8 ">
        <h1 className="text-blue-900 text-4xl px-6 sm:text-6xl sm:px-[64px]  ">404</h1>
        <h2 className=" relative text-lg top-3 sm:text-4xl sm:top-4">Nie odnazleziono strony</h2>
      </div>
      <div className="relative sm:left-[350px] m-8 scale-1 sm:m-16 sm:relative sm:scale-150">
        <Image src={vectors} />
      </div>
      <div className="m-8 sm:w-[616px] sm:h-[144px]">
        <Text
          as="p"
          variant="base"
          textContent="Nawet gdy sytuacja wydaje się beznadziejna, zawsze znajdziesz drogę do domu..."
        />
      </div>
      <div className="m-6">
        <button className=" border-2">Przejdź do strony głównej </button>
      </div>
    </div>
  );
};

export default ErrorPage;
