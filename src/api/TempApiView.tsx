import { useEffect, useState } from 'react';

import type { User } from './entities/user';
import { createFetchClients } from './infrastructures/createFetchClient';
import { getAuthRepository } from './repositories/authRepository';
import { getUserRepository } from './repositories/userRepository';
import { getAuthService } from './usecases/authService';
import { getUserService } from './usecases/userService';

export const TempApiView = () => {
  const [token, setToken] = useState('');
  const [user, setUser] = useState<User>();

  const httpClient = createFetchClients({
    baseURL: 'https://wafflestudio-seminar-2024-snutt-redirect.vercel.app',
    headers: { 'x-access-token': token },
  });
  const authRespository = getAuthRepository(httpClient);
  const authService = getAuthService(authRespository);
  const userRepository = getUserRepository(httpClient);
  const userService = getUserService(userRepository);

  useEffect(() => {
    authService
      .signIn({ id: 'sstto', password: 'qwer1234' })
      .then((signInResp) => {
        setToken(signInResp.token);
      })
      .catch(() => null);
  }, [authService]);

  useEffect(() => {
    if (token !== '') {
      userService
        .getUserInfo()
        .then((u) => {
          setUser(u);
        })
        .catch(() => null);
    }
  }, [token, userService]);

  return (
    <div>
      {user?.nickname.nickname}#{user?.nickname.tag}
    </div>
  );
};
