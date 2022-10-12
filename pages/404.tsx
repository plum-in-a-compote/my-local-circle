import type { NextPage } from 'next';
import Image from 'next/image';
import vectors from '../public/404.svg';

const ErrorPage: NextPage = () => {
  return (
    <div className="">
      <div className="flex m-2 mt-8 ">
        <h1 className="text-blue-900 text-4xl px-6 sm:text-6xl sm:px-[64px]  ">404</h1>
        <h2 className=" relative text-lg top-3 sm:text-4xl sm:top-4">Nie odnazleziono strony</h2>
      </div>
      <div className="relative sm:left-[800px] m-8 scale-1 sm:m-16 sm:scale-150 xl:scale-[2.5] xl:top-[400px] xl:left-[2300px]">
        <Image src={vectors} />
      </div>
      <div className="m-8 sm:w-[400px] sm:relative top-[-250px] left-[220px]">
        <p className="text-base sm:text-[20px] ">
          Nawet gdy sytuacja wydaje się beznadziejna, zawsze znajdziesz drogę do domu...
        </p>
      </div>
      <div className="m-6 sm:relative top-[-250px] left-[220px]">
        <button className=" border-2 px-2 py-2">Przejdź do strony głównej </button>
      </div>
    </div>
  );
};

export default ErrorPage;
