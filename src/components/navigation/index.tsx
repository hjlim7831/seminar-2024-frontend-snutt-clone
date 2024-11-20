import type { ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';

import { IcFriend } from '../icons/ic-friend';
import { IcLectureReview } from '../icons/ic-lecture-review';
import { IcSearch } from '../icons/ic-search';
import { IcSeeMore } from '../icons/ic-see-more';
import { IcTimeTable } from '../icons/ic-time-table';

export const Navigation = () => {
  const navigation = useNavigate();
  return (
    <div className="flex justify-between border-t px-[30px] py-2.5">
      <IconWrapper
        onClick={() => {
          navigation('/');
        }}
      >
        <IcTimeTable />
      </IconWrapper>
      <IconWrapper>
        <IcSearch />
      </IconWrapper>
      <IconWrapper>
        <IcLectureReview />
      </IconWrapper>
      <IconWrapper>
        <IcFriend />
      </IconWrapper>
      <IconWrapper
        onClick={() => {
          navigation('/mypage');
        }}
      >
        <IcSeeMore />
      </IconWrapper>
    </div>
  );
};

type IconWrapperProps = {
  children: ReactNode;
  onClick?: () => void;
};

const IconWrapper = ({ children, onClick }: IconWrapperProps) => {
  const handleOnClick = () => {
    onClick?.();
  };
  return (
    <div
      className="flex h-[30px] w-[30px] cursor-pointer items-center justify-center"
      onClick={handleOnClick}
    >
      {children}
    </div>
  );
};
