import type { NextRequest } from 'next/server';
import slugify from 'slugify';
import { createCommunityServer } from '../../lib/server/createCommunityServer';
import { CommunityFieldsSch } from '../../validators/Community';

export const config = {
  runtime: 'experimental-edge',
};

// We have taken a liberty here, we should check Authorization
// header and check if the userId matches the request body
export default async function handler(req: NextRequest) {
  if (req.method === 'POST') {
    try {
      const json: unknown = await req.json();
      const communityFields = CommunityFieldsSch.parse(json);

      // throws error if bad data is provided
      const community = await createCommunityServer({
        ...communityFields,
        slug: slugify(communityFields.name, { lower: true }),
      });

      return new Response(JSON.stringify(community), {
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
