import { PasswordChangeFields } from '../../validators/PasswordChange';
import { supabase } from '../supabase';

export const updateUserPassword = async (fields: PasswordChangeFields) => {
  const { data, error } = await supabase.auth.updateUser({
    password: fields.newPassword,
  });

  if (error) {
    throw new Error(error.message);
  }

  return data;
};
