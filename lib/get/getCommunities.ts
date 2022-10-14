import { INITIAL_PUBLIC_COMMUNITES_DISPLAYED } from '../../constants/community';
import { supabase } from '../supabase';

export const getCommunities = async () => {
  const {} = await supabase.from('Community').select().limit(INITIAL_PUBLIC_COMMUNITES_DISPLAYED);
};
