import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(process.env.SUPABASE_KEY!, process.env.SUPABASE_KEY!);
