import Link from 'next/link';
import { Fragment } from 'react';

type FooterContributorProps = {
  name: string;
  projectRole: string;
  profileUrl: string;
};

export const FooterContributor = ({ name, projectRole, profileUrl }: FooterContributorProps) => {
  return (
    <Fragment>
      <Link href={profileUrl}>
        <a className="block mb-2 text-blue-100 text-sm font-semibold underline lg:text-base lg:leading-5 focus:text-blue-400 hover:text-blue-400">
          {name}
        </a>
      </Link>
      <span className="text-gray-50 text-xs lg:text-sm lg:leading-5">{projectRole}</span>
    </Fragment>
  );
};
