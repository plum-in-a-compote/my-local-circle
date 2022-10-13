import { assert } from 'console';

// An example of Configuration as a service

type KeyToType = {
  SUPABASE_URL: string;
  SUPABASE_KEY: string;
};

type GetVal = <T extends keyof KeyToType>(key: T) => KeyToType[T] | null | undefined;
const getVal: GetVal = (key) => {
  switch (key) {
    case 'SUPABASE_URL':
      return process.env.SUPABASE_URL;
    case 'SUPABASE_KEY':
      return process.env.SUPABASE_KEY;
    default:
      return null;
  }
};

type GetConfigVal = <T extends keyof KeyToType>(key: T) => KeyToType[T];
export const getConfigVal: GetConfigVal = (key) => {
  const val = getVal(key);
  assert(Boolean(val), `Configuration variable ${key} is falsy or doesn't exist`);

  return val as KeyToType[typeof key];
};
