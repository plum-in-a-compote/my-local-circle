import { CommunitySch } from '../../validators/Community';
import { supabase } from '../supabase';

export const getCommunityBySlug = async (slug: string) => {
  const { data, error } = await supabase.from('Community').select('*').eq('slug', slug);

  if (error) {
    throw new Error(error.message);
  }

  // always returns an array
  const community = CommunitySch.safeParse(data[0]);
  if (!community.success) {
    throw new Error(community.error.message);
  }

  return community.data;
};

export const getCommunityById = async (id: number) => {
  const { data, error } = await supabase.from('Community').select('*').eq('id', id);

  if (error) {
    throw new Error(error.message);
  }

  // always returns an array
  const community = CommunitySch.safeParse(data[0]);
  if (!community.success) {
    throw new Error(community.error.message);
  }

  return community.data;
};
