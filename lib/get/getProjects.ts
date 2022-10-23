import { z } from 'zod';
import { ProjectSch } from '../../validators/Project';
import { supabase } from '../supabase';

export const getProjects = async (budgetId: number) => {
  const { data, error } = await supabase
    .from('ProjectProposal')
    .select('*')
    .eq('budgetId', budgetId);

  if (error) {
    throw new Error(error.message);
  }

  const projects = z.array(ProjectSch).safeParse(data);
  if (!projects.success) {
    throw new Error(projects.error.message);
  }

  return projects.data;
};
