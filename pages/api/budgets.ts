import type { NextRequest } from 'next/server';
import slugify from 'slugify';
import { getCommunityById } from '../../lib/get/getCommunity';
import { createBudgetServer } from '../../lib/server/createBudgetServer';
import { BudgetFieldsSch } from '../../validators/Budget';

export const config = {
  runtime: 'experimental-edge',
};

// We have taken a liberty here, we should check Authorization
// header and check if the userId matches the request body
export default async function handler(req: NextRequest) {
  if (req.method === 'POST') {
    try {
      const json: unknown = await req.json();
      const budgetFields = BudgetFieldsSch.parse(json);
      const community = await getCommunityById(budgetFields.communityId);

      // throws error if bad data is provided
      const budget = await createBudgetServer({
        ...budgetFields,
        // make sure that slug must be unique just among the community
        // so /communities/one/2022 and /communities/two/2022 is fine
        slug: `${slugify(community.slug, { lower: true })}/${slugify(budgetFields.name, {
          lower: true,
        })}`,
      });

      return new Response(JSON.stringify(budget), {
        status: 201,
        headers: {
          'content-type': 'application/json',
        },
      });
    } catch (e) {
      console.error(e);
      return new Response(null, {
        status: 400,
        headers: {
          'content-type': 'application/json',
        },
      });
    }
  }
}
