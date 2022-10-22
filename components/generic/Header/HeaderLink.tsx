import Link from 'next/link';
import { useRouter } from 'next/router';
import { clsx as cx } from 'clsx';
import { useEffect, useState } from 'react';

type HeaderLinkProps = {
  href: string;
  content: string;
};

export const HeaderLink = ({ href, content }: HeaderLinkProps) => {
  const [active, setActive] = useState(false);
  const router = useRouter();
  useEffect(() => setActive(router.asPath === href), [href, router.asPath]);

  return (
    <li
      className={cx(
        'group flex items-center w-full max-w-xs mx-auto px-3 py-2 rounded sm:w-fit sm:px-2 sm:py-1.5 lg:px-4 lg:py-3',
        active ? 'bg-gray-200' : 'transition hover:bg-blue-100 focus-within:bg-blue-100',
      )}
    >
      <Link href={href}>
        <a
          className={cx(
            'text-xs font-normal lg:text-base',
            active
              ? 'text-gray-900'
              : 'text-gray-700 group-hover:text-blue-800 focus:text-blue-800',
          )}
        >
          {content}
        </a>
      </Link>
    </li>
  );
};
