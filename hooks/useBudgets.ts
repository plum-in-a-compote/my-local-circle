import { useQuery } from '@tanstack/react-query';
import { getBudgets } from '../lib/get/getBudgets';

export const useBudgets = (communityId: number) => {
  return useQuery(['budgets', communityId], () => getBudgets(communityId));
};
