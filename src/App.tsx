import './reset.css';
import './index.css';

import { useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { serviceContext } from './contexts/serviceContext';
import { type TokenContext, tokenContext } from './contexts/tokenContext';
import { unauthenticatedServiceContext } from './contexts/unauthenticatedServiceContext';
import type { Token } from './entities/auth';
import { createFetchClients } from './infrastructures/createFetchClient';
import { createLocalStorageClient } from './infrastructures/createLocalStorageClient';
import { getAuthRepository } from './repositories/authRepository';
import { getStorageRepository } from './repositories/storageRepository';
import { getTimeTableRepository } from './repositories/timetableRepository';
import { getUserRepository } from './repositories/userRepository';
import { getAuthService } from './usecases/authService';
import { getTimetableService } from './usecases/timtableService';
import { getTokenService } from './usecases/tokenService';
import { getUserService } from './usecases/userService';
import { AuthenticatedPage } from './views/AuthenticatedPage';
import { Landing } from './views/Landing';
import { Login } from './views/Login';
import { MyPage } from './views/MyPage';
import { Timetable } from './views/TimeTable';
import { TimeTableList } from './views/TimeTableList';

export const App = () => {
  const persistStorage = createLocalStorageClient();
  const storageRepository = getStorageRepository({ client: persistStorage });
  const tokenService = getTokenService({ storageRepository });

  const [token, setToken] = useState<Token | null>(tokenService.getToken());

  const tokenContextValue: TokenContext = {
    saveToken: (newToken: string) => {
      setToken(newToken);
      tokenService.saveToken(newToken);
    },
    clearToken: () => {
      setToken(null);
      tokenService.clearToken();
    },
  };

  return (
    <tokenContext.Provider value={tokenContextValue}>
      {token !== null ? (
        <serviceContext.Provider value={{ ...getAuthenticatedService(token) }}>
          <RouterProvider router={getAuthenticatedBrowserRouter()} />
        </serviceContext.Provider>
      ) : (
        <unauthenticatedServiceContext.Provider
          value={{ ...getUnauthenticatedService() }}
        >
          <RouterProvider router={getUnauthenticatedBrowserRouter()} />
        </unauthenticatedServiceContext.Provider>
      )}
    </tokenContext.Provider>
  );
};

const getAuthenticatedBrowserRouter = () => {
  return createBrowserRouter([
    {
      path: '/',
      element: <AuthenticatedPage />,
      children: [
        {
          path: '/',
          element: <Timetable />,
        },
        {
          path: '/mypage',
          element: <MyPage />,
        },
        {
          path: '/list',
          element: <TimeTableList />,
        },
      ],
    },
  ]);
};

const getUnauthenticatedBrowserRouter = () => {
  return createBrowserRouter([
    {
      path: '/',
      element: <Landing />,
    },
    {
      path: '/login',
      element: <Login />,
    },
  ]);
};

const getAuthenticatedService = (token: string) => {
  const httpClient = createFetchClients({
    baseURL: 'https://wafflestudio-seminar-2024-snutt-redirect.vercel.app',
    headers: { 'x-access-token': token },
  });
  const authRespository = getAuthRepository(httpClient);
  const userRepository = getUserRepository(httpClient);
  const timetableRepository = getTimeTableRepository(httpClient);

  const authService = getAuthService(authRespository);
  const userService = getUserService(userRepository);
  const timetableService = getTimetableService(timetableRepository);

  return {
    authService,
    userService,
    timetableService,
  };
};

const getUnauthenticatedService = () => {
  const httpClient = createFetchClients({
    baseURL: 'https://wafflestudio-seminar-2024-snutt-redirect.vercel.app',
  });
  const authRespository = getAuthRepository(httpClient);
  const authService = getAuthService(authRespository);

  return {
    authService,
  };
};
