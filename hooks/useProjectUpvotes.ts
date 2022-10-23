import { useQuery } from '@tanstack/react-query';
import { getProjectUpvotes } from '../lib/get/getProjectUpvotes';
import { ProjectUpvote } from '../validators/Project';
import { useUser } from './useUser';

export const useProjectUpvotes = (projectId: number) => {
  return useQuery(['upvotes', projectId], () => getProjectUpvotes(projectId));
};

export const useUpvotesCount = (projectId: number) => {
  return useQuery<ProjectUpvote[], Error, number>(
    ['upvotes', projectId],
    () => getProjectUpvotes(projectId),
    {
      select: (projects) => projects.length,
    },
  );
};

export const useUserVoted = (projectId: number) => {
  const { data } = useUser();
  const userId = data?.id;

  return useQuery<ProjectUpvote[], Error, boolean>(
    ['upvotes', projectId],
    () => getProjectUpvotes(projectId),
    {
      select: (projects) => projects.some((p) => p.userId === userId),
    },
  );
};
