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
};

export const Breadcrumbs = ({ community, budget }: BreadcrumbsProps) => {
  return (
    <div className="flex gap-1">
      <span className="text-sm leading-5 font-normal text-blue-800 lg:text-base focus:underline hover:underline">
        <Link href={`/communities/${community.slug}`}>
          <a>{community.name}</a>
        </Link>
      </span>
      <span className="text-sm leading-5 font-normal text-gray-700 lg:text-base">/</span>
      <span className="text-sm leading-5 font-semibold text-blue-800 lg:text-base focus:underline hover:underline">
        <Link href={`/communities/${community.slug}/budgets/${budget.slug}`}>
          <a>{budget.name}</a>
        </Link>
      </span>
    </div>
  );
};
