import type { SignInResponse } from '../entities/auth';
import type { AuthRepository } from '../repositories/authRepository';

interface AuthService {
  signIn(params: { id: string; password: string }): Promise<SignInResponse>;
}

export const getAuthService = (authRepository: AuthRepository): AuthService => {
  return {
    signIn: (params) =>
      authRepository.signInWithIdPassword({
        id: params.id,
        password: params.password,
      }),
  };
};
