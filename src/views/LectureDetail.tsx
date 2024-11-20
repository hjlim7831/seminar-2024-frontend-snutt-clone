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
    <div className="flex flex-1 flex-col gap-1 bg-grey-background font-pretendard">
      <Header />
      <div className="flex items-center gap-4 bg-white px-4 py-2">
        <div className="w-20 text-sm text-gray-400">강의명</div>
        <div>{lecture.course_title}</div>
      </div>
      <div className="flex items-center gap-4 bg-white px-4 py-2">
        <div className="w-20 text-sm text-gray-400">교수명</div>
        <div>{lecture.instructor}</div>
      </div>
      <div className="flex items-center gap-4 bg-white px-4 py-2">
        <div className="w-20 text-sm text-gray-400">학과</div>
        <div>{lecture.department}</div>
      </div>
      <div className="flex items-center gap-4 bg-white px-4 py-2">
        <div className="w-20 text-sm text-gray-400">학점</div>
        <div>{lecture.credit}</div>
      </div>
      <div className="flex items-center gap-4 bg-white px-4 py-2">
        <div className="w-20 text-sm text-gray-400">분류</div>
        <div>
          {lecture.classification !== '' ? lecture.classification : '(없음)'}
        </div>
      </div>
      <div className="flex items-center gap-4 bg-white px-4 py-2">
        <div className="w-20 text-sm text-gray-400">구분</div>
        <div>{lecture.category !== '' ? lecture.category : '(없음)'}</div>
      </div>
      <div className="flex items-center gap-4 bg-white px-4 py-2">
        <div className="w-20 text-sm text-gray-400">강좌번호</div>
        <div>{lecture.course_number}</div>
      </div>
      <div className="flex items-center gap-4 bg-white px-4 py-2">
        <div className="w-20 text-sm text-gray-400">분반 번호</div>
        <div>{lecture.lecture_number}</div>
      </div>
      <div className="flex items-center gap-4 bg-white px-4 py-2">
        <div className="w-20 text-sm text-gray-400">정원</div>
        <div>{lecture.quota}</div>
      </div>
      <div className="flex items-center gap-4 bg-white px-4 py-2">
        <div className="w-20 text-sm text-gray-400">비고</div>
        <div>{lecture.remark}</div>
      </div>
      <button
        onClick={handleOnClick}
        className="rounded-md bg-white p-2 text-red"
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
    <div
      onClick={handleOnClick}
      className="flex cursor-pointer items-center gap-1 p-2"
    >
      <IcArrowBack className="text-black" />
      <div className="font-[500]">강의 상세 보기</div>
    </div>
  );
};
