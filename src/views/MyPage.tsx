import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { IcChevronRight } from '../components/icons/ic-chevron-right';
import { IcSeeMore } from '../components/icons/ic-see-more';
import { useServiceContext } from '../contexts/serviceContext';
import { useTokenContext } from '../contexts/tokenContext';
import type { User } from '../entities/user';

export const MyPage = () => {
  return (
    <div className="flex flex-col justify-start h-screen bg-grey-background gap-2 font-pretendard">
      <MyPageHeader />
      <MyAccount />
      <Logout />
    </div>
  );
};

const MyPageHeader = () => {
  return (
    <div className="w-full bg-white p-2">
      <div className="flex justify-cstart items-center gap-2">
        <IcSeeMore />
        <div className="font-bold">더보기</div>
      </div>
    </div>
  );
};

const MyAccount = () => {
  return (
    <div className="w-full bg-white p-2">
      <MyNickname />
    </div>
  );
};

const MyNickname = () => {
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
    <>
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
    </>
  );
};

type State = {
  user: User | null;
  loading: boolean;
  error: string | null;
};

const Logout = () => {
  const navigate = useNavigate();
  const { clearToken } = useTokenContext();
  const handleOnClick = () => {
    clearToken();
    navigate('/');
  };
  return (
    <div
      className="bg-white w-full p-2 pl-4 pr-4 text-red text-[13px] flex justify-between items-center cursor-pointer"
      onClick={handleOnClick}
    >
      <div>로그아웃</div>
      <IcChevronRight width="12" />
    </div>
  );
};
