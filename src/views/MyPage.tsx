import { useEffect, useState } from 'react';

import { useServiceContext } from '../contexts/serviceContext';
import type { User } from '../entities/user';

export const MyPage = () => {
  const [state, setState] = useState<State>({
    user: null,
    loading: false,
    error: null,
  });
  const { userService } = useServiceContext();

  useEffect(() => {
    setState((prev) => ({ ...prev, loading: true, error: null }));

    let ignore = false;
    userService
      .getUserInfo()
      .then((u) => {
        if (!ignore) {
          setState((prev) => ({
            ...prev,
            user: u,
            loading: false,
            error: null,
          }));
        }
      })
      .catch((err: unknown) => {
        if (!ignore) {
          setState((prev) => ({
            ...prev,
            user: null,
            loading: false,
            error: err instanceof Error ? err.message : '유저 불러오기 실패',
          }));
        }
      });
    return () => {
      ignore = true;
    };
  }, [userService]);

  return (
    <div className="flex justify-center items-center h-screen">
      {state.loading ? (
        // Loading spinner
        <div className="flex justify-center items-center space-x-2">
          <div className="w-8 h-8 border-4 border-dashed rounded-full animate-spin border-mint-500"></div>
          <div className="text-lg font-semibold text-gray-500">로딩 중...</div>
        </div>
      ) : state.error !== null ? (
        // Error message
        <div className="text-center text-red-500 text-lg font-bold">
          {state.error}
        </div>
      ) : state.user !== null ? (
        // Display user nickname
        <div className="text-center font-bold text-lg">
          {`${state.user.nickname.nickname}#${state.user.nickname.tag}`}
        </div>
      ) : (
        // Failed
        <div className="text-center text-red-500 text-lg font-bold">
          유저 불러오기 실패!
        </div>
      )}
    </div>
  );
};

type State = {
  user: User | null;
  loading: boolean;
  error: string | null;
};
