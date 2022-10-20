export const fetcher = (path: string, body?: object) =>
  fetch(path, { body: JSON.stringify(body), method: Boolean(body) ? 'POST' : 'GET' }).then((res) =>
    res.json(),
  );
