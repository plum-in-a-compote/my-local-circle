import Link from 'next/link';
import { useRouter } from 'next/router';
import { clsx as cx } from 'clsx';

type HeaderLinkProps = {
  href: string;
  content: string;
};

export const HeaderLink = ({ href, content }: HeaderLinkProps) => {
  const router = useRouter();
  const active = router.asPath === href;

  return (
    <li
      className={cx(
        'w-full px-3 py-2 rounded sm:w-fit sm:px-2 sm:py-1.5 lg:px-4 lg:py-3',
        active && 'bg-gray-200',
      )}
    >
      <Link href={href}>
        <a
          className={cx(
            'text-xs font-normal lg:text-base',
            active ? 'text-gray-900' : 'text-gray-700',
          )}
        >
          {content}
        </a>
      </Link>
    </li>
  );
};
