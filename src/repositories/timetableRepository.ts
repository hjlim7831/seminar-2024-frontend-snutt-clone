import type { HttpClient } from '../clients/HttpClient';
import type { Timetable } from '../entities/timetable';

export type TimetableRepository = {
  getRecentTimetable(): Promise<Timetable>;
  deleteTimetableLecture(
    timetableId: string,
    timetableLectureId: string,
  ): Promise<Timetable>;
};

export const getTimeTableRepository = (
  http: HttpClient,
): TimetableRepository => ({
  getRecentTimetable: async () => {
    return (await http.get<Timetable>('/v1/tables/recent')).data;
  },
  deleteTimetableLecture: async (timetableId, timetableLectureId) => {
    return (
      await http.delete<Timetable>(
        `/v1/tables/${timetableId}/lecture/${timetableLectureId}`,
      )
    ).data;
  },
});
