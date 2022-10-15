import { SignUpFields, SignUpFieldsSch } from '../../validators/SignUpFields';
import { supabase } from '../supabase';

export const signUp = async (fields: SignUpFields) => {
  const parsedFields = SignUpFieldsSch.parse(fields);
  const { data, error } = await supabase.auth.signUp(parsedFields);

  if (error) {
    throw new Error(error.message);
  }

  return data;
};
