import { z } from 'zod';
import { ProjectUpvoteSch } from '../../validators/Project';
import { supabase } from '../supabase';

export const getProjectUpvotes = async (projectId: number) => {
  const { data, error } = await supabase
    .from('ProjectUpvote')
    .select('*')
    .eq('projectId', projectId);

  if (error) {
    throw new Error(error.message);
  }

  const projects = z.array(ProjectUpvoteSch).safeParse(data);
  if (!projects.success) {
    throw new Error(projects.error.message);
  }

  return projects.data;
};
