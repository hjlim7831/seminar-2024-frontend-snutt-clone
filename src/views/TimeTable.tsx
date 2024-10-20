import { IcListView } from '../components/icons/ic-list-view';

export const TimeTable = () => {
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
      <div></div>
    </>
  );
};
