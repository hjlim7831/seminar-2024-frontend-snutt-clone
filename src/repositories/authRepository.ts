import type { HttpClient } from '../clients/HttpClient';
import type { SignInResponse } from '../entities/auth';

export type AuthRepository = {
  signInWithIdPassword(args: {
    id: string;
    password: string;
  }): Promise<SignInResponse>;
};

export const getAuthRepository = (httpClient: HttpClient): AuthRepository => {
  return {
    signInWithIdPassword: async (body) =>
      (
        await httpClient.post<SignInResponse, { id: string; password: string }>(
          `/v1/auth/login_local`,
          body,
        )
      ).data,
  };
};
