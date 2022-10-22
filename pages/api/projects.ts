import type { NextRequest } from 'next/server';
import { createProjectServer } from '../../lib/server/createProjectServer';
import { ProjectFieldsSch } from '../../validators/Project';

export const config = {
  runtime: 'experimental-edge',
};

export default async function handler(req: NextRequest) {
  if (req.method === 'POST') {
    try {
      const json: unknown = await req.json();
      const projectFields = ProjectFieldsSch.parse(json);

      // check if user is from community

      // throws error if bad data is provided
      const project = await createProjectServer({
        ...projectFields,
      });

      return new Response(JSON.stringify(project), {
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
