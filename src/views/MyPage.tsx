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
    <div className="flex flex-1 flex-col gap-2 bg-grey-background font-pretendard">
      <MyPageHeader />
      <MyAccount />
      <Logout />
    </div>
  );
};

const MyPageHeader = () => {
  return (
    <div className="bg-white p-2">
      <div className="flex items-center gap-2">
        <IcSeeMore />
        <div className="font-bold">더보기</div>
      </div>
    </div>
  );
};

const MyAccountLabel = () => {
  return (
    <div className="flex items-center gap-1 text-[13px]">
      <IcUserFilled width="15" className="text-grey-assistive" />
      <div>내 계정</div>
    </div>
  );
};

const MyAccount = () => {
  return (
    <div className="flex justify-between bg-white p-4">
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
        <div className="flex items-center justify-center space-x-2">
          <div className="border-mint-500 h-4 w-4 animate-spin rounded-full border-2 border-dashed"></div>
          <div className="text-[13px] font-semibold text-gray-500">
            로딩 중...
          </div>
        </div>
      ) : state.error !== null ? (
        // Error message
        <div className="text-red-500 text-center text-lg font-bold">
          {state.error}
        </div>
      ) : state.user !== null ? (
        // Display user nickname
        <div className="text-center text-[13px] text-dark-grey">
          {`${state.user.nickname.nickname}#${state.user.nickname.tag}`}
        </div>
      ) : (
        // Failed
        <div className="text-red-500 text-center text-[13px] font-bold">
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
    <button
      className="flex cursor-pointer items-center justify-between bg-white py-2 pl-4 pr-4 text-[13px] text-red"
      onClick={handleOnClick}
    >
      <div>로그아웃</div>
      <IcChevronRight width="12" className="text-black" />
    </button>
  );
};
