import { type StorageClient } from '../clients/StorageClient';
import type { StorageKey } from '../entities/storage';

export interface StorageRepository {
  get(key: StorageKey): string | null;
  set(key: StorageKey, value: string): void;
  remove(key: StorageKey): void;
}

type Deps = { client: StorageClient };
export const getStorageRepository = ({ client }: Deps): StorageRepository => {
  const persistStorage = client;
  return {
    get: (key) => persistStorage.get(key),
    set: (key, value) => {
      persistStorage.set(key, value);
    },
    remove: (key) => {
      persistStorage.remove(key);
    },
  };
};
