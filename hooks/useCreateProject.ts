import { useMutation } from '@tanstack/react-query';
import { fetcher } from '../lib/fetcher';
import { Project, ProjectFields, ProjectSch } from '../validators/Project';

export const useCreateProject = () => {
  return useMutation<Project, unknown, ProjectFields>((fields) =>
    fetcher('/api/projects', { method: 'POST', body: fields, zSch: ProjectSch }),
  );
};
