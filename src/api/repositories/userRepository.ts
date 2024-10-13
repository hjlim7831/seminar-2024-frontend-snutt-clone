import type { HttpClient } from '../clients/HttpClient';
import type { User } from '../entities/user';

export interface UserRepository {
  getUserInfo(): Promise<User>;
}

export const getUserRepository = (httpClient: HttpClient) => {
  return {
    getUserInfo: async () => (await httpClient.get<User>(`/v1/users/me`)).data,
  };
};
