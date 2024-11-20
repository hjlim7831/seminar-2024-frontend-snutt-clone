import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Divider } from '../components/divider';
import { IcArrowBack } from '../components/icons/ic-arrow-back';
import { IcClock } from '../components/icons/ic-clock';
import { IcTag } from '../components/icons/ic-tag';
import { useServiceContext } from '../contexts/serviceContext';
import { DAY_LABEL_MAP } from '../entities/time';
import type { Lecture, Timetable as TT } from '../entities/timetable';

export const TimeTableList = () => {
  const { timetableService } = useServiceContext();
  const [timetable, setTimetable] = useState<TT | null>(null);

  useEffect(() => {
    timetableService
      .getRecentTimetable()
      .then((table) => {
        setTimetable(table);
      })
      .catch(() => null);
  }, [timetableService]);
  return (
    <div>
      <TimeTableListHeader timetable={timetable} />
      {timetable?.lecture_list.map((lecture, index) => (
        <LectureItem lecture={lecture} key={index} />
      ))}
    </div>
  );
};

type TimeTableListHeaderProps = {
  timetable: TT | null;
};

const TimeTableListHeader = ({ timetable }: TimeTableListHeaderProps) => {
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
        {timetable !== null ? (
          <div className="font-bold">나의 시간표</div>
        ) : (
          <div className="font-bold">로딩 중..</div>
        )}
      </div>
    </div>
  );
};

type LectureItemProps = {
  lecture: Lecture;
};

const LectureItem = ({ lecture }: LectureItemProps) => {
  return (
    <div className="m-2">
      <div className="flex justify-between">
        <div className="font-bold text-[14px]">{lecture.course_title}</div>
        <div className="text-[13px]">
          {lecture.instructor} / {lecture.credit}학점
        </div>
      </div>
      <div className="m-1">
        <div className="flex items-center gap-2">
          <IcTag width="12px" />
          <div className="text-[12px]">
            {lecture.category !== '' ? `${lecture.category}, ` : ''}
            {lecture.department !== '' ? `${lecture.department}, ` : ''}
            {lecture.academic_year}
          </div>
        </div>
        <div className="flex items-center gap-2">
          <IcClock width="12px" />
          <div className="text-[12px]">
            {lecture.class_time_json
              .map((classTime) => {
                return `${DAY_LABEL_MAP[classTime.day]}(${classTime.start_time}~${classTime.end_time})`;
              })
              .join(', ')}
          </div>
        </div>
      </div>
      <Divider className="bg-grey-disabled" />
    </div>
  );
};
