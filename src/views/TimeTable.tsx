import { IcListView } from '../components/icons/ic-list-view';
import {
  type Day,
  DAY_LABEL_MAP,
  DAY_LIST,
  HOUR_LIST,
  MINUTE_HALFLEN,
  MINUTE_LEN,
} from '../entities/time';

export const Timetable = () => {
  return (
    <>
      <div className="flex pt-2 pr-3 pb-1.5 pl-4 gap-2.5 items-center">
        <div className="">
          <IcListView />
        </div>
        <div className="flex gap-2 items-center">
          <div className="text-base font-bold">a안</div>
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

        <div
          className="bg-snutt-red text-white px-1.5 flex flex-col gap-0.5 justify-center items-center text-center z-10"
          style={{
            gridRowStart: 2,
            gridRowEnd: 17,
            gridColumnStart: 3,
            gridColumnEnd: 4,
          }}
        >
          <div className="text-xxsm">미디어프로그래밍 프로젝트</div>
          <div className="text-xsm font-semibold">49-301</div>
        </div>

        <div
          className="bg-snutt-orange text-white px-1.5 flex flex-col gap-0.5 justify-center items-center text-center z-10"
          style={{
            gridRowStart: 6,
            gridRowEnd: 21,
            gridColumnStart: 5,
            gridColumnEnd: 6,
          }}
        >
          <div className="text-xxsm">편집디자인</div>
          <div className="text-xsm font-semibold">49-215</div>
        </div>

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
  return {
    gridRowStart: 1,
    gridRowEnd: 2,
    gridColumnStart: day + 2,
    gridColumnEnd: day + 3,
  };
};
