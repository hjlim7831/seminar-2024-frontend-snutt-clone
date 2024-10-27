import type { HttpClient } from '../clients/HttpClient';
import type { Timetable } from '../entities/timetable';

export type TimetableRepository = {
  getRecentTimetable(): Promise<Timetable>;
};

export const getTimeTableRepository = (
  http: HttpClient,
): TimetableRepository => ({
  getRecentTimetable: async () => {
    return (await http.get<Timetable>('/v1/tables/recent')).data;
  },
});
