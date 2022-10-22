// An example of Configuration as a service

type KeyToType = {
  NEXT_PUBLIC_SUPABASE_URL: string;
  NEXT_PUBLIC_SUPABASE_KEY: string;
  SUPABASE_SECRET_KEY: string;
};

type GetValue = <T extends keyof KeyToType>(key: T) => KeyToType[T] | null | undefined;
const getValue: GetValue = (key) => {
  switch (key) {
    case 'NEXT_PUBLIC_SUPABASE_URL':
      return process.env.NEXT_PUBLIC_SUPABASE_URL;
    case 'NEXT_PUBLIC_SUPABASE_KEY':
      return process.env.NEXT_PUBLIC_SUPABASE_KEY;
    case 'SUPABASE_SECRET_KEY':
      return process.env.SUPABASE_SECRET_KEY;
    default:
      return null;
  }
};

type GetEnvValue = <T extends keyof KeyToType>(key: T) => KeyToType[T];
export const getEnvValue: GetEnvValue = (key) => {
  const val = getValue(key);

  if (!val) {
    throw new Error(`Configuration variable ${key} is falsy or doesn't exist`);
  }

  return val;
};
