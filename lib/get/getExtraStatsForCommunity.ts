import { Community } from '../../validators/Community';
import { getBudgets } from './getBudgets';
import { getMembers } from './getMembers';
import { getProjects } from './getProjects';

export type CommunityWithExtraStats = Community & {
  membersNo: number;
  budgetsNo: number;
  projectsNo: number;
  averageBudgetAmount: number;
};

export const getExtraStatsForCommunity = async (c: Community): Promise<CommunityWithExtraStats> => {
  // we have taken a liberty here, we fetch entire projects
  // & members instead of counting them to reuse our functions

  // it's static generation on the server so it shouldn't be a problem
  const budgets = await getBudgets(c.id as number);
  const projects = await Promise.all(budgets.map((b) => getProjects(b.id as number)));
  const members = await getMembers(c.id as number);

  const projectsNo = projects.flat().length;
  const budgetsNo = budgets.length;
  const membersNo = members.length;

  // 0 if no budgets
  const averageBudgetAmount =
    Math.round(budgets.reduce((acc, b) => acc + b.estimatedCost, 0) / budgetsNo) || 0;

  return {
    ...c,
    membersNo,
    budgetsNo,
    projectsNo,
    averageBudgetAmount,
  };
};
