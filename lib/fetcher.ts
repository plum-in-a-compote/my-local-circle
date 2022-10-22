export const fetcher = (path: string, body?: object) =>
  fetch(path, {
    body: body ? JSON.stringify(body) : null,
    method: Boolean(body) ? 'POST' : 'GET',
  }).then((res) => {
    if (res.ok) {
      return res.json().catch(() => ({}));
    }
    throw new Error('Invalid response!');
  });
