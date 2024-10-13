import type { HttpClient } from '../clients/HttpClient';

type Url = string;
type Config = { params: URLSearchParams };

export const createFetchClients = (
  options: Partial<{ baseURL: string; headers: { [key: string]: string } }>,
): HttpClient => {
  const baseURL = options.baseURL ?? '';
  const headers = options.headers ?? {};

  return {
    async get<D = unknown>(url: Url, config?: Partial<Config & D>) {
      const fetchUrl = `${baseURL}${url}${paramsToString(config?.params)}`;
      const fetchHeaders = { ...headers };
      const response = await fetch(fetchUrl, {
        headers: fetchHeaders,
        method: 'GET',
      });
      const responseBody = (await response.json().catch(() => null)) as D;
      if (response.ok) {
        return { data: responseBody };
      } else {
        throw Error(JSON.stringify(responseBody));
      }
    },

    async post<D = unknown, B = unknown>(
      url: Url,
      body?: B,
      config?: Partial<Config & D & B>,
    ) {
      const fetchUrl = `${baseURL}${url}${paramsToString(config?.params)}`;
      const fetchHeaders = {
        'content-type': 'application/json;charset=UTF-8',
        ...headers,
      };
      const response = await fetch(fetchUrl, {
        headers: fetchHeaders,
        method: 'POST',
        body: JSON.stringify(body),
      });
      const responseBody = (await response.json().catch(() => null)) as D;

      if (response.ok) {
        return { data: responseBody };
      } else {
        throw Error(JSON.stringify(responseBody));
      }
    },
  };
};

const paramsToString = (params?: URLSearchParams) =>
  params != null ? `?${params.toString()}` : '';
