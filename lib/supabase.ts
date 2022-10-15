import { createClient } from '@supabase/supabase-js';
import { getEnvValue } from './env';

export const supabase = createClient(
  getEnvValue('NEXT_PUBLIC_SUPABASE_URL'),
  getEnvValue('NEXT_PUBLIC_SUPABASE_KEY'),
);
