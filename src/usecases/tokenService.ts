import { type StorageRepository } from '../repositories/storageRepository';

type TokenService = {
  getToken(): string | null;
  saveToken(token: string): void;
  clearToken(): void;
};

export const getTokenService = ({
  storageRepository,
}: {
  storageRepository: StorageRepository;
}): TokenService => {
  return {
    getToken: () => storageRepository.get('snutt_token'),
    saveToken: (token) => {
      storageRepository.set('snutt_token', token);
    },
    clearToken: () => {
      storageRepository.remove('snutt_token');
      storageRepository.remove('snutt_token');
    },
  };
};
