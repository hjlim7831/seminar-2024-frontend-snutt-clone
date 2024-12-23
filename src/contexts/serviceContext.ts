import { createContext, useContext } from 'react';

import type { AuthService } from '../usecases/authService';
import type { TimetableService } from '../usecases/timtableService';
import type { UserService } from '../usecases/userService';

type ServiceContext = {
  authService: AuthService;
  userService: UserService;
  timetableService: TimetableService;
};

export const serviceContext = createContext<ServiceContext | null>(null);

export const useServiceContext = (): ServiceContext => {
  const contextValue = useContext(serviceContext);
  if (contextValue === null) throw new Error('ServiceContext value is null');
  return contextValue;
};
