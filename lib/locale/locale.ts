// Always add all needed entries in plPl (default) locale, then Typescript will
// indicate missing fields

import { plPL } from './pl-PL';
import { uk } from './uk';

export const SIMPLE_STATIC_LOCALE_MAPPER = {
  'pl-PL': plPL,
  uk: uk,
};

// Naive & simple solution
export type Locale = keyof typeof SIMPLE_STATIC_LOCALE_MAPPER;
export type LocalePage = keyof typeof SIMPLE_STATIC_LOCALE_MAPPER['pl-PL'];
export type LocalePageEntry<T extends LocalePage> = typeof SIMPLE_STATIC_LOCALE_MAPPER['pl-PL'][T];

// Type annotation makes sure that sb adds entry for every language
export type SomeLocalePageEntry = typeof SIMPLE_STATIC_LOCALE_MAPPER[Locale][LocalePage];

export const getLocaleForPage = <T extends LocalePage>(
  locale: Locale,
  page: T,
): LocalePageEntry<T> => SIMPLE_STATIC_LOCALE_MAPPER[locale][page];

// run on the client
export const getLocaleTextFactory =
  <T extends LocalePage>(localePageEntry: LocalePageEntry<T>) =>
  (entry: keyof LocalePageEntry<T>) =>
    localePageEntry[entry];

export type GetLocale<T extends LocalePage> = ReturnType<typeof getLocaleTextFactory<T>>;
