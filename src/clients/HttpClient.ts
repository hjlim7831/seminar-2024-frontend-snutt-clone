type Url = string;
type Config = { params: URLSearchParams };

export type HttpClient = {
  get<D = unknown>(
    url: Url,
    config?: Partial<Config & D>,
  ): Promise<{ data: D }>;
  post<D = unknown, B = unknown>(
    url: Url,
    body?: B,
    config?: Partial<Config & D & B>,
  ): Promise<{ data: D }>;
};
