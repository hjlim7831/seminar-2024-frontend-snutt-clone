import { useNavigate } from 'react-router-dom';

import { IcArrowBack } from '../components/icons/ic-arrow-back';

export const TimeTableList = () => {
  return (
    <div>
      <TimeTableListHeader />
    </div>
  );
};

const TimeTableListHeader = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full bg-white p-2">
      <div
        className="flex justify-cstart items-center gap-2 cursor-pointer"
        onClick={() => {
          navigate('/');
        }}
      >
        <IcArrowBack />
        <div className="font-bold">나의 시간표</div>
      </div>
    </div>
  );
};
