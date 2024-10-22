import { IcListView } from '../components/icons/ic-list-view';

export const TimeTable = () => {
  const days = ['월', '화', '수', '목', '금'];
  const hours = range(9, 22);

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
        className="grid"
        style={{
          gridTemplateRows: `1.5fr repeat(${hours.length * 4}, 1fr)`,
          gridTemplateColumns: `3fr repeat(${days.length}, 7fr)`,
        }}
      >
        {/* header */}
        <div className="row-start-1 row-end-2 col-start-1 col-end-2"></div>
        {days.map((day, index) => (
          <div
            key={day}
            className="text-center text-dark-grey font-semibold border-l"
            style={{
              gridColumnStart: index + 2,
              gridColumnEnd: index + 3,
            }}
          >
            {day}
          </div>
        ))}
        {/* time */}
        {hours.map((hour, index) => (
          <div
            className="col-start-1 col-end-2 text-right pr-1 text-dark-grey border-t"
            style={{
              gridRowStart: index * 4 + 2,
              gridRowEnd: index * 4 + 6,
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
        {days.map((_, indexCol) =>
          hours.map((_, indexRow) => (
            <>
              <div
                className="border-t border-l"
                style={{
                  gridRowStart: 4 * indexRow + 2,
                  gridRowEnd: 4 * indexRow + 4,
                  gridColumnStart: indexCol + 2,
                  gridColumnEnd: indexCol + 3,
                }}
              ></div>
              <div
                className="border-t border-l border-t-gray-100"
                style={{
                  gridRowStart: 4 * indexRow + 4,
                  gridRowEnd: 4 * indexRow + 6,
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

const range = (start: number, end: number): number[] =>
  Array.from({ length: end - start + 1 }, (_, i) => start + i);
