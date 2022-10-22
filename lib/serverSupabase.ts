import { createClient } from '@supabase/supabase-js';
import { getEnvValue } from './env';

export const serverSupabase = createClient(
  getEnvValue('NEXT_PUBLIC_SUPABASE_URL'),
  getEnvValue('SUPABASE_SECRET_KEY'),
);
