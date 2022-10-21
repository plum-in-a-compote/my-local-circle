import { useRouter } from 'next/router';
import { Fragment } from 'react';

type Tab<T extends string> = {
  icon: React.ReactNode;
  name: string;
  value: T;
};

type TabsProps<T extends string> = {
  defaultActiveTab: T;
  tabs: Tab<T>[];
  onTabChange: (t: T) => void;
};

export const Tabs = <T extends string>({ defaultActiveTab, tabs, onTabChange }: TabsProps<T>) => {
  // check is active based on ruter params
  const router = useRouter();

  return (
    <Fragment>
      <ul className="flex gap-2" role="tablist">
        {tabs.map((t) => (
          <li className="flex gap-2 px-2 py-1" key={t.value} role="presentation">
            {t.icon}
            <a
              className="text-sm leading-5 font-normal text-gray-700"
              role="tab"
              href={`#${t.value}`}
              id={t.value}
              aria-selected="true"
            >
              {t.name}
            </a>
          </li>
        ))}
      </ul>
    </Fragment>
  );
};
