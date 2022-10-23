import { useMutation, useQueryClient } from '@tanstack/react-query';
import { downvoteProject, upvoteProject } from '../lib/post/upvoteProject';

type MutationInput = {
  like: boolean;
  userId: string;
};

export const useVoteProject = (projectId: number) => {
  const queryClient = useQueryClient();

  return useMutation<undefined[], unknown, MutationInput>(
    ({ like, userId }) =>
      like ? upvoteProject({ projectId, userId }) : downvoteProject({ projectId, userId }),
    {
      onSuccess: () => {
        void queryClient.invalidateQueries(['upvotes', projectId]);
      },
    },
  );
};
