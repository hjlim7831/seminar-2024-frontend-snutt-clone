import { useEffect, useState } from 'react';

import { IcListView } from '../components/icons/ic-list-view';
import { useServiceContext } from '../contexts/serviceContext';
import {
  type Day,
  DAY_LABEL_MAP,
  DAY_LIST,
  type Hour,
  HOUR_LIST,
  type Minute,
  MINUTE_HALFLEN,
  MINUTE_LEN,
  MINUTE_LIST,
} from '../entities/time';
import type { Timetable as TT } from '../entities/timetable';

export const Timetable = () => {
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
    <>
      <div className="flex pt-2 pr-3 pb-1.5 pl-4 gap-2.5 items-center">
        <div className="">
          <IcListView />
        </div>
        <div className="flex gap-2 items-center">
          <div className="text-base font-bold">
            {timetable?.title ?? '로딩 중..'}
          </div>
          <div className="text-xs text-grey-assistive">(18학점)</div>
        </div>
      </div>
      <div
        className="flex-auto grid"
        style={{
          gridTemplateRows: `minmax(0, 1fr) repeat(${HOUR_LIST.length * MINUTE_LEN}, minmax(0, 0.1fr))`,
          gridTemplateColumns: `3fr repeat(${DAY_LIST.length}, 7fr)`,
        }}
      >
        {/* header */}
        <div className="row-start-1 row-end-2 col-start-1 col-end-2"></div>
        {DAY_LIST.map((day) => (
          <div
            key={day}
            className="flex justify-center items-center text-sm text-center text-dark-grey font-semibold border-l"
            style={{
              gridColumnStart: day + 2,
              gridColumnEnd: day + 3,
            }}
          >
            {DAY_LABEL_MAP[day]}
          </div>
        ))}

        {/* time */}
        {HOUR_LIST.map((hour, index) => (
          <div
            className="col-start-1 col-end-2 text-right pr-1 text-dark-grey border-t"
            style={{
              gridRowStart: index * MINUTE_LEN + 2,
              gridRowEnd: index * (MINUTE_LEN + 1) + 2,
            }}
            key={hour}
          >
            {hour}
          </div>
        ))}

        {timetable?.lecture_list.map((l) =>
          l.class_time_json.map((c) => (
            <div
              className={`${COLOR_MAP[l.color_index] ?? 'bg-black'} text-white px-1.5 flex flex-col gap-0.5 justify-center items-center text-center z-10`}
              key={`${c.day}-${c.start_time}-${c.end_time}`}
              style={convertToGridState(c.day, c.start_time, c.end_time)}
            >
              <div className="text-xxsm">{l.course_title}</div>
              <div className="text-xsm font-semibold">{c.place}</div>
            </div>
          )),
        )}

        {/* empty table */}
        {DAY_LIST.map((indexCol) =>
          HOUR_LIST.map((_, indexRow) => (
            <>
              <div
                className="border-t border-l"
                style={{
                  gridRowStart: MINUTE_LEN * indexRow + 2,
                  gridRowEnd: MINUTE_LEN * indexRow + MINUTE_HALFLEN + 2,
                  gridColumnStart: indexCol + 2,
                  gridColumnEnd: indexCol + 3,
                }}
              ></div>
              <div
                className="border-t border-l border-t-gray-100"
                style={{
                  gridRowStart: MINUTE_LEN * indexRow + MINUTE_HALFLEN + 2,
                  gridRowEnd: MINUTE_LEN * (indexRow + 1) + 2,
                  gridColumnStart: indexCol + 2,
                  gridColumnEnd: indexCol + 3,
                }}
              ></div>
            </>
          )),
        )}
      </div>
    </>
  );
};

const convertToGridState = (day: Day, startTime: string, endTime: string) => {
  const s = parseTime(startTime);
  const e = parseTime(endTime);

  return {
    gridRowStart: 2 + (s.hour - 9) * MINUTE_LEN + MINUTE_LIST.indexOf(s.minute),
    gridRowEnd: 2 + (e.hour - 9) * MINUTE_LEN + MINUTE_LIST.indexOf(e.minute),
    gridColumnStart: day + 2,
    gridColumnEnd: day + 3,
  };
};

const parseTime = (time: string): { hour: Hour; minute: Minute } => {
  const [hourStr, minuteStr] = time.split(':');
  if (hourStr === undefined || minuteStr === undefined) {
    throw new Error("Invalid time format: expected 'HH:MM'");
  }
  const hour = parseInt(hourStr, 10) as Hour;
  const minute = parseInt(minuteStr, 10) as Minute;

  return { hour, minute };
};

const COLOR_MAP: Record<number, string> = {
  0: 'bg-snutt-red',
  1: 'bg-snutt-orange',
};
