import { createClient } from '@supabase/supabase-js';
import { getConfigVal } from './config';

export const supabase = createClient(getConfigVal('SUPABASE_URL'), getConfigVal('SUPABASE_KEY'));
