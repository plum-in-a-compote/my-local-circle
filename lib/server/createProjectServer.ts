import { Project, ProjectSch } from '../../validators/Project';
import { serverSupabase } from '../serverSupabase';

export const createProjectServer = async (fields: Project): Promise<Project> => {
  const { data, error } = await serverSupabase.from('ProjectProposal').insert([fields]).select();

  if (error) {
    throw new Error(error.message);
  }

  const project = ProjectSch.safeParse(data[0]);
  if (!project.success) {
    throw new Error(project.error.message);
  }

  return project.data;
};
