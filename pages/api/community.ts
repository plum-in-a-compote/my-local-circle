import type { NextRequest } from 'next/server';
import slugify from 'slugify';
import { createCommunity } from '../../lib/post/createCommunity';
import { CommunityFieldsSch } from '../../validators/Community';

export const config = {
  runtime: 'experimental-edge',
};

export default async function handler(req: NextRequest) {
  // we don't use HOF to manage req method, bcs as for now
  // we use just this one to proxy request
  if (req.method === 'POST') {
    try {
      const json: unknown = await req.json();
      const communityFields = CommunityFieldsSch.parse(json);

      // throws error if bad data is provided
      await createCommunity({ ...communityFields, slug: slugify(communityFields.name) });

      return new Response(null, {
        status: 201,
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
