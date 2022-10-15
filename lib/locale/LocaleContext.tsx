import { createContext, useContext } from 'react';
import { getLocaleTextFactory, LocalePage, LocalePageEntry, SomeLocalePageEntry } from './locale';

const LocaleContext = createContext<SomeLocalePageEntry | null>(null);

type LocaleProviderProps<T extends LocalePage> = {
  children: React.ReactNode;
  localeEntry: LocalePageEntry<T>;
};
const LocaleProvider = <T extends LocalePage>({
  children,
  localeEntry,
}: LocaleProviderProps<T>) => {
  return <LocaleContext.Provider value={localeEntry}>{children}</LocaleContext.Provider>;
};

// It's assumed that you will assign proper type on given
// page, otherwise it's error-prone
const useLocale = <T extends LocalePage>() => {
  const context = useContext(LocaleContext) as LocalePageEntry<T>;
  if (context === null) {
    throw new Error('useLocale must be used within a LocaleProvider');
  }

  return getLocaleTextFactory(context);
};

export { LocaleProvider, useLocale };
