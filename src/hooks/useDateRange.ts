import { DateRangeType } from '@customTypes/DateRange';
import { addDaysToDate, convertDateToString, getCurrentWeekMondayAndFriday } from '@utils/index';
import { useState } from 'react';

export const useDateRange = () => {
  const today = new Date();
  const [initialStartDate, initialEndDate] = getCurrentWeekMondayAndFriday(today);
  const [dateRange, setDateRange] = useState<DateRangeType>({ startDate: initialStartDate, endDate: initialEndDate });

  const changeDateRange = (action: string): void => {
    const increment = action === 'next' ? 1 : -1;

    const prevDay = addDaysToDate(dateRange.startDate, increment);
    const nextDay = addDaysToDate(dateRange.endDate, increment);

    setDateRange({ startDate: convertDateToString(prevDay), endDate: convertDateToString(nextDay) });
  };

  return { dateRange, changeDateRange };
};
