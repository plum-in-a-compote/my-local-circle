import { ProjectUpvote } from '../../validators/Project';
import { supabase } from '../supabase';

export const upvoteProject = async (fields: ProjectUpvote) => {
  const { data, error } = await supabase.from('ProjectUpvote').insert(fields);

  if (error) {
    throw new Error(error.message);
  }

  return data;
};

export const downvoteProject = async (fields: ProjectUpvote) => {
  const { data, error } = await supabase.from('ProjectUpvote').delete().match(fields);

  if (error) {
    throw new Error(error.message);
  }

  return data;
};
