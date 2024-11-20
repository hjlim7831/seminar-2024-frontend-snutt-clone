import { useLocation, useNavigate, useParams } from 'react-router-dom';

import { IcArrowBack } from '../components/icons/ic-arrow-back';
import { useServiceContext } from '../contexts/serviceContext';
import type { Lecture } from '../entities/timetable';

type LectureState = {
  lecture: Lecture;
};

export const LectureDetail = () => {
  const navigate = useNavigate();
  const { timetableId, timetableLectureId } = useParams();
  const { timetableService } = useServiceContext();
  const location = useLocation();
  const { lecture } = location.state as LectureState;

  const handleOnClick = () => {
    if (timetableId === undefined || timetableLectureId === undefined) {
      console.debug('timetableId or lectureId is undefined');
      return;
    }
    timetableService
      .deleteTimetableLecture(timetableId, timetableLectureId)
      .then(() => {
        navigate('/');
      })
      .catch(() => null);
  };

  return (
    <div className="flex flex-col justify-start h-screen bg-grey-background gap-1 font-pretendard">
      <Header />
      <div className="w-full bg-white px-4 py-2 flex gap-4 items-center">
        <div className="w-20 text-gray-400 text-sm">강의명</div>
        <div>{lecture.course_title}</div>
      </div>
      <div className="w-full bg-white px-4 py-2 flex gap-4 items-center">
        <div className="w-20 text-gray-400 text-sm">교수명</div>
        <div>{lecture.instructor}</div>
      </div>
      <div className="w-full bg-white px-4 py-2 flex gap-4 items-center">
        <div className="w-20 text-gray-400 text-sm">학과</div>
        <div>{lecture.department}</div>
      </div>
      <div className="w-full bg-white px-4 py-2 flex gap-4 items-center">
        <div className="w-20 text-gray-400 text-sm">학점</div>
        <div>{lecture.credit}</div>
      </div>
      <div className="w-full bg-white px-4 py-2 flex gap-4 items-center">
        <div className="w-20 text-gray-400 text-sm">분류</div>
        <div>
          {lecture.classification !== '' ? lecture.classification : '(없음)'}
        </div>
      </div>
      <div className="w-full bg-white px-4 py-2 flex gap-4 items-center">
        <div className="w-20 text-gray-400 text-sm">구분</div>
        <div>{lecture.category !== '' ? lecture.category : '(없음)'}</div>
      </div>
      <div className="w-full bg-white px-4 py-2 flex gap-4 items-center">
        <div className="w-20 text-gray-400 text-sm">강좌번호</div>
        <div>{lecture.course_number}</div>
      </div>
      <div className="w-full bg-white px-4 py-2 flex gap-4 items-center">
        <div className="w-20 text-gray-400 text-sm">분반 번호</div>
        <div>{lecture.lecture_number}</div>
      </div>
      <div className="w-full bg-white px-4 py-2 flex gap-4 items-center">
        <div className="w-20 text-gray-400 text-sm">정원</div>
        <div>{lecture.quota}</div>
      </div>
      <div className="w-full bg-white px-4 py-2 flex gap-4 items-center">
        <div className="w-20 text-gray-400 text-sm">비고</div>
        <div>{lecture.remark}</div>
      </div>
      <button
        onClick={handleOnClick}
        className="w-full text-red bg-white p-2 rounded-[6px]"
      >
        삭제
      </button>
    </div>
  );
};

const Header = () => {
  const navigate = useNavigate();
  const handleOnClick = () => {
    navigate('/');
  };

  return (
    <div className="w-[375px] flex items-center justify-between p-2">
      <div
        onClick={handleOnClick}
        className="flex items-center gap-1 cursor-pointer"
      >
        <IcArrowBack className="text-black" />
        <div className="font-[500]">강의 상세 보기</div>
      </div>
    </div>
  );
};
