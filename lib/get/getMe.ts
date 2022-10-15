import { supabase } from '../supabase';

export const getMe = async (jwt: string) => {
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser(jwt);

  if (error) {
    throw new Error(error.message);
  }

  return user;
};
