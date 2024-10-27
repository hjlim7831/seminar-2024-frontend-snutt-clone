import type { Timetable } from '../entities/timetable';
import type { TimetableRepository } from '../repositories/timetableRepository';

export type TimetableService = {
  getRecentTimetable(): Promise<Timetable>;
};

export const getTimetableService = (
  timtableRepository: TimetableRepository,
): TimetableService => {
  return {
    getRecentTimetable: async () => {
      return timtableRepository.getRecentTimetable();
    },
  };
};
