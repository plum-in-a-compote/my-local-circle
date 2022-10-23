import { Fragment } from 'react';
import { Badge } from '../Badge/Badge';
import { Breadcrumbs } from '../Breadcrumbs/Breadcrumbs';

type BudgetItemProps = {
  title: string;
  slug: string;
  communityName: string;
  description: string;
  authored: boolean;
  estimatedRealisationDate: string;
};

export const BudgetItem = ({
  title,
  communityName,
  slug,
  description,
  authored,
  estimatedRealisationDate,
}: BudgetItemProps) => {
  const [communitySlug, budgetSlug] = slug.split('/');

  return (
    <Fragment>
      <div className="flex items-center gap-4 mb-2">
        <Breadcrumbs
          community={{
            name: communityName,
            slug: communitySlug,
          }}
          budget={{
            name: title,
            slug: budgetSlug,
          }}
        />
        {authored && <Badge color="amber" textContent="Twoje podanie" />}
      </div>
      <p className="text-xs leading-5 text-gray-700 mb-3 lg:text-sm lg:leading-6">{description}</p>
      <span className="block text-xs leading-5 text-gray-500 pb-2 border-b border-gray-300 sm:pb-4 lg:text-sm lg:leading-6">
        Przewidywane zakończenie: {estimatedRealisationDate}
      </span>
    </Fragment>
  );
};
