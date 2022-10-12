import type { NextRequest } from 'next/server';
import { supabase } from '../../lib/supabase';

export const config = {
  runtime: 'experimental-edge',
};

export default async function handler(req: NextRequest) {
  const { data, error } = await supabase.from('test').select();

  return new Response(
    JSON.stringify({
      name: data,
    }),
    {
      status: 200,
      headers: {
        'content-type': 'application/json',
      },
    },
  );
}
