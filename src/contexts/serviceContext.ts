import { createContext, useContext } from 'react';

import type { AuthService } from '../usecases/authService';
import type { UserService } from '../usecases/userService';

type AuthenticatedServiceContext = {
  authService: AuthService;
  userService: UserService;
};

type UnauthenticatedServiceContext = {
  authService: AuthService;
  userService?: null;
};

export type ServiceContext =
  | AuthenticatedServiceContext
  | UnauthenticatedServiceContext;

export const serviceContext = createContext<ServiceContext | null>(null);

export const useServiceContext = (): ServiceContext => {
  const contextValue = useContext(serviceContext);
  if (contextValue === null) throw new Error('ServiceContext value is null');
  return contextValue;
};
