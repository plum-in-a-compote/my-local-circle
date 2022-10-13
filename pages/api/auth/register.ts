import type { NextRequest } from 'next/server';
import { supabase } from '../../../lib/supabase';
import { z } from 'zod';

export const config = {
  runtime: 'experimental-edge',
};

const SignInFields = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string(),
  // add regex
  phoneNo: z.string().optional(),
  address: z.string().optional(),
});

type SignInFields = z.infer<typeof SignInFields>;

export default async function handler(req: NextRequest) {
  const json: unknown = await req.json();
  const fields = SignInFields.safeParse(json);

  if (fields.success) {
    const { data, error } = await supabase.auth.admin.createUser({
      email: fields.data.email,
      password: fields.data.password,
      email_confirm: true,
    });

    return new Response(
      JSON.stringify({
        user: data,
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
