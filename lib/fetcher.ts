import { TypeOf, z } from 'zod';

// used in the project
type HTTPMethod = 'GET' | 'POST';
type Config<T extends z.ZodType<object>> = {
  method: HTTPMethod;
  body?: object;
  zSch?: T;
  config?: RequestInit;
};

export const fetcher = async <T extends z.ZodType<object>>(
  path: string,
  { method, body, config, zSch }: Config<T>,
): Promise<Awaited<z.infer<T>>> => {
  try {
    const res = await fetch(path, {
      ...config,
      method,
      credentials: 'include',
      headers: { 'content-type': 'application/json' },
      body: body ? JSON.stringify(body) : undefined,
    });

    if (res.ok) {
      if (zSch) {
        const json: unknown = await res.json().catch(() => ({}));
        const data = zSch.parse(json);
        return data as unknown as Awaited<TypeOf<T>>;
      }

      return null as unknown as Awaited<TypeOf<T>>;
    }
    throw new Error('Invalid response');
  } catch (err) {
    throw err;
  }
};
