import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { IcChevronRight } from '../components/icons/ic-chevron-right';
import { IcSeeMore } from '../components/icons/ic-see-more';
import { IcUserFilled } from '../components/icons/ic-user-filled';
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

const MyAccountLabel = () => {
  return (
    <div className="flex items-center text-[13px] gap-1">
      <IcUserFilled width="15" className="text-grey-assistive" />
      <div>내 계정</div>
    </div>
  );
};

const MyAccount = () => {
  return (
    <div className="w-full bg-white p-4 flex justify-between">
      <MyAccountLabel />
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
    <div className="flex items-center gap-1">
      {state.loading ? (
        // Loading spinner
        <div className="flex justify-center items-center space-x-2">
          <div className="w-4 h-4 border-2 border-dashed rounded-full animate-spin border-mint-500"></div>
          <div className="text-[13px] font-semibold text-gray-500">
            로딩 중...
          </div>
        </div>
      ) : state.error !== null ? (
        // Error message
        <div className="text-center text-red-500 text-lg font-bold">
          {state.error}
        </div>
      ) : state.user !== null ? (
        // Display user nickname
        <div className="text-center text-[13px] text-dark-grey">
          {`${state.user.nickname.nickname}#${state.user.nickname.tag}`}
        </div>
      ) : (
        // Failed
        <div className="text-center text-red-500 text-[13px] font-bold">
          유저 불러오기 실패!
        </div>
      )}
      <IcChevronRight width="12" className="text-black" />
    </div>
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
      <IcChevronRight width="12" className="text-black" />
    </div>
  );
};
