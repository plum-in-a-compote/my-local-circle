import { SignInFields, SignInFieldsSch } from '../../validators/SignInFields';
import { supabase } from '../supabase';

export const signIn = async (fields: SignInFields) => {
  const parsedFields = SignInFieldsSch.parse(fields);
  const { data, error } = await supabase.auth.signInWithPassword(parsedFields);

  if (error) {
    throw new Error(error.message);
  }

  return data;
};
