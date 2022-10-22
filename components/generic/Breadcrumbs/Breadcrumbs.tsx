import { clsx as cx } from 'clsx';
import Link from 'next/link';

type BreadcrumbsProps = {
  community: {
    slug: string;
    name: string;
  };
  budget: {
    slug: string;
    name: string;
  };
  className?: string;
};

export const Breadcrumbs = ({ community, budget, className }: BreadcrumbsProps) => {
  return (
    <div className={cx('flex gap-1', className)}>
      <span className="text-sm leading-5 font-normal text-blue-800 focus:underline hover:underline sm:text-base">
        <Link href={`/communities/${community.slug}`}>
          <a>{community.name}</a>
        </Link>
      </span>
      <span className="text-sm leading-5 font-normal text-gray-700">/</span>
      <span className="text-sm leading-5 font-semibold text-blue-800 focus:underline hover:underline sm:text-base">
        <Link href={`/communities/${community.slug}/budgets/${budget.slug}`}>
          <a>{budget.name}</a>
        </Link>
      </span>
    </div>
  );
};
