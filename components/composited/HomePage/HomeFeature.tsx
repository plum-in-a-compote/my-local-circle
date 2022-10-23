import { ReactNode } from 'react';

type HomeFeatureProps = {
  title: string;
  description: string;
  // Icon
  children: ReactNode;
};

export const HomeFeature = ({ title, description, children }: HomeFeatureProps) => {
  return (
    <article className="flex gap-2">
      {children}
      <div className="ml-2">
        <h3 className="text-lg font-semibold text-gray-700 lg:text-2xl lg:leading-9">{title}</h3>
        <p className="text-base text-gray-500 lg:text-xl">{description}</p>
      </div>
    </article>
  );
};
