import { Fragment, useCallback, useEffect, useState } from 'react';
import { clsx as cx } from 'clsx';

type Tab<T extends string> = {
  icon?: React.ReactNode;
  name: string;
  value: T;
};

type TabsProps<T extends string, D extends T> = {
  tabs: Tab<T>[];
  defaultActiveTab: D;
  className?: string;
};

const Underline = () => {
  return (
    <span aria-hidden={true} className="absolute w-full left-0 right-0 top-full h-0.5">
      <span className="absolute bottom-px w-full h-0.5 bg-amber-400"></span>
    </span>
  );
};

export const Tabs = <T extends string, D extends T>({
  defaultActiveTab,
  tabs,
  className,
}: TabsProps<T, D>) => {
  const [activeTab, setActiveTab] = useState<T>(defaultActiveTab);
  const handleTabChange = useCallback((tab: T) => setActiveTab(tab), []);

  useEffect(() => {
    window.location.hash = defaultActiveTab;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Fragment>
      <ul className={cx('w-full border-b border-gray-500 flex gap-2', className)} role="tablist">
        {tabs.map((t) => {
          const selected = t.value === activeTab;
          const handleClick = () => handleTabChange(t.value);
          return (
            <li
              className={cx('relative flex items-center justify-between gap-2 pl-2 pr-3 pt-1 pb-3')}
              key={t.value}
              role="presentation"
            >
              <span className="inline-block w-5 h-5">{t.icon}</span>
              {selected && <Underline />}
              <a
                className={cx(
                  'text-sm leading-5 font-normal text-gray-700',
                  selected && 'font-semibold',
                )}
                role="tab"
                href={`#${t.value}`}
                aria-selected={selected}
                onClick={handleClick}
              >
                {t.name}
              </a>
            </li>
          );
        })}
      </ul>
    </Fragment>
  );
};
