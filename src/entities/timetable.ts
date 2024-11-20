import type { Day } from './time';

export type Timetable = {
  _id: string;
  title: string;
  lecture_list: Lecture[];
};

export type Lecture = {
  _id: string;
  academic_year: string;
  course_title: string;
  instructor: string;
  department: string;
  category: string;
  classification: string;
  course_number: string;
  lecture_number: string;
  quota: string;
  remark: string;
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
