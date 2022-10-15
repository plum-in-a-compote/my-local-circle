import { SignInFields } from '../../validators/SignInFields';
import { supabase } from '../supabase';

export const signIn = async (fields: SignInFields) => {
  const { data, error } = await supabase.auth.signInWithPassword(fields);

  if (error) {
    throw new Error(error.message);
  }

  return data;
};
