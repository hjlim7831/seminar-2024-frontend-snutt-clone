import { createContext, useContext } from 'react';

import type { AuthService } from '../usecases/authService';

type UnauthenticatedServiceContext = {
  authService: AuthService;
};

export const unauthenticatedServiceContext =
  createContext<UnauthenticatedServiceContext | null>(null);

export const useUnauthenticatedServiceContext =
  (): UnauthenticatedServiceContext => {
    const contextValue = useContext(unauthenticatedServiceContext);
    if (contextValue === null) throw new Error('ServiceContext value is null');
    return contextValue;
  };
