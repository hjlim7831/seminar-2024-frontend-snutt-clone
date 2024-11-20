import type { Day } from './time';

export type Timetable = {
  title: string;
  lecture_list: Lecture[];
};

type Lecture = {
  course_title: string;
  color_index: number;
  class_time_json: ClassTime[];
  credit: number;
};

type ClassTime = {
  day: Day;
  place: string;
  start_time: string;
  end_time: string;
};
