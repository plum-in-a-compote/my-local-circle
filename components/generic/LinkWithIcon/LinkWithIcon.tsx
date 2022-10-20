import { clsx as cx } from 'clsx';
import Link from 'next/link';

type LinkWithIconProps = {
  content: string;
  icon: React.ReactNode;
  href: string;
  variant: keyof typeof variants;
  className?: string;
};

const variants = {
  primary: 'bg-blue-700 text-white font-semibold hover:bg-blue-500 focus:bg-blue-500',
};

export const LinkWithIcon = ({ variant, content, icon, className, href }: LinkWithIconProps) => {
  return (
    <Link href={href}>
      <a
        className={cx(
          'flex gap-1.5 align-baseline rounded px-3 py-1 text-xs leading-4 transition-colors sm:px-4 sm:py-1.5 sm:text-sm sm:leading-5 focus:outline-none focus:ring focus:ring-blue-300',
          variants[variant],
          className,
        )}
      >
        {icon}
        {content}
      </a>
    </Link>
  );
};
