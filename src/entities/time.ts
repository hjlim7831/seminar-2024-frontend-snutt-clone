export type Day = 0 | 1 | 2 | 3 | 4;
export const DAY_LABEL_MAP: Record<Day, string> = {
  0: '월',
  1: '화',
  2: '수',
  3: '목',
  4: '금',
};
export const DAY_LIST: Day[] = [0, 1, 2, 3, 4];

export type Hour =
  | 9
  | 10
  | 11
  | 12
  | 13
  | 14
  | 15
  | 16
  | 17
  | 18
  | 19
  | 20
  | 21
  | 22;
export const HOUR_LIST: Hour[] = [
  9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
];

export type Minute = 0 | 5 | 10 | 15 | 20 | 25 | 30 | 35 | 40 | 45 | 50 | 55;
export const MINUTE_LIST: Minute[] = [
  0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55,
];
export const MINUTE_LEN = MINUTE_LIST.length;
export const MINUTE_HALFLEN = (MINUTE_LEN / 2) | 0;
