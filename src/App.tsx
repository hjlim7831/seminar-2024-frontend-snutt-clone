import './reset.css';
import './index.css';

import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { Navigation } from './components/navigation';
import { type ServiceContext, serviceContext } from './contexts/serviceContext';
import type { Token } from './entities/auth';
import useLocalStorage from './hooks/useLocalStorage';
import { createFetchClients } from './infrastructures/createFetchClient';
import { getAuthRepository } from './repositories/authRepository';
import { getUserRepository } from './repositories/userRepository';
import { getAuthService } from './usecases/authService';
import { getUserService } from './usecases/userService';
import { Landing } from './views/Landing';
import { Login } from './views/Login';
import { MyPage } from './views/MyPage';

const TOKEN_KEY = 'TOKEN_KEY';

export const App = () => {
  const [token, setToken] = useLocalStorage<Token | null>(TOKEN_KEY, null);
  const [serviceContextValue, setServiceContextValue] =
    useState<ServiceContext | null>(null);

  const isLogin = token !== null;

  useEffect(() => {
    const httpClient = createFetchClients({
      baseURL: 'https://wafflestudio-seminar-2024-snutt-redirect.vercel.app',
      headers: token != null ? { 'x-access-token': token } : {},
    });
    const authRespository = getAuthRepository(httpClient);
    const authService = getAuthService(authRespository);
    const userService =
      token !== null ? getUserService(getUserRepository(httpClient)) : null;
    setServiceContextValue({ authService, userService });
  }, [token]);

  const saveToken = (t: Token) => {
    setToken(t);
  };

  return (
    <serviceContext.Provider value={serviceContextValue}>
      <Router>
        <div className="min-h-screen flex justify-center">
          <Routes>
            <Route path="/" element={isLogin ? null : <Landing />} />
            <Route path="/login" element={<Login saveToken={saveToken} />} />
            <Route path="/mypage" element={<MyPage />} />
          </Routes>
          {isLogin ? <Navigation /> : null}
        </div>
      </Router>
    </serviceContext.Provider>
  );
};
