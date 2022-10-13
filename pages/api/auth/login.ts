import type { NextRequest } from 'next/server';
import { supabase } from '../../../lib/supabase';
import { z } from 'zod';

export const config = {
  runtime: 'experimental-edge',
};

const LoginFields = z.object({
  email: z.string().email(),
  password: z.string(),
});

type LoginFields = z.infer<typeof LoginFields>;

export default async function handler(req: NextRequest) {
  const json: unknown = await req.json();
  const fields = LoginFields.safeParse(json);

  // try catch
  if (fields.success) {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: fields.data.email,
      password: fields.data.password,
    });

    const { data: profile, error: profileError } = await supabase
      .from('Profile')
      .select()
      .eq('userId', data.user?.id);

    return new Response(
      JSON.stringify({
        user: profile,
      }),
      {
        status: 200,
        headers: {
          'content-type': 'application/json',
        },
      },
    );
  }

  return new Response(null, { status: 403 });
}
