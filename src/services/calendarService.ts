import { CalendarType } from '@customTypes/Calendar';
import axios from 'axios';

export const fetchCalendar = async (
  professionalId: string,
  startDate: string,
  endDate: string,
): Promise<CalendarType[]> => {
  const { data } = await axios.get(
    `http://localhost:8000/calendar?id_professional=${professionalId}&date_number_gte=${startDate}&date_number_lte=${endDate}`,
  );
  return data;
};
