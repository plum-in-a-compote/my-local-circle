import { useQuery } from '@tanstack/react-query';
import { getProjects } from '../lib/get/getProjects';
import { Project } from '../validators/Project';

export const useBudgetProjects = (budgetId: number) => {
  return useQuery(['projects', budgetId], () => getProjects(budgetId));
};

export const useProjectsCount = (budgetId: number) => {
  return useQuery<Project[], Error, number>(['projects', budgetId], () => getProjects(budgetId), {
    select: (projects) => projects.length,
  });
};
