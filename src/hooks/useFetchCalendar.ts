import { CalendarType } from '@customTypes/Calendar';
import { fetchCalendar } from '@services/calendarService';
import { UseQueryResult, useQuery } from '@tanstack/react-query';

export const useFetchCalendar = <T = CalendarType>(
  professionalId: string,
  startDate: string,
  endDate: string,
): UseQueryResult<T, Error> => {
  return useQuery({
    queryKey: ['calendar', professionalId],
    queryFn: () => fetchCalendar(professionalId, startDate, endDate),
  });
};
