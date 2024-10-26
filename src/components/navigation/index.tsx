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
    <div className="w-full h-21 flex justify-between pt-[10px] pb-[44px] pl-[30px] pr-[30px] border-t">
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
      className="w-[30px] h-[30px] flex justify-center items-center cursor-pointer"
      onClick={handleOnClick}
    >
      {children}
    </div>
  );
};
