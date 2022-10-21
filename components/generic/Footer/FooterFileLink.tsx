import Link from 'next/link';

type FooterFileLinkProps = {
  name: string;
};

export const FooterFileLink = ({ name }: FooterFileLinkProps) => {
  return (
    <Link href={`/${name}`}>
      <a className="block mb-2 text-white text-sm font-semibold underline lg:text-base lg:leading-5 focus:text-blue-300 hover:text-blue-300">
        {name}
      </a>
    </Link>
  );
};
