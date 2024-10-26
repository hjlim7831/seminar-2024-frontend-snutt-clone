export type Timetable = {
  title: string;
  lectureList: Lecture[];
};

export type Lecture = {
  courseTitle: string;
  classTimeJson: ClassTime[];
};

export type ClassTime = {
  day: number;
  place: string;
  startTime: string;
  endTime: string;
};
