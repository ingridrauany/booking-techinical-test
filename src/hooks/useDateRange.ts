import { useState } from 'react';

type DateRange = {
  startDate: Date;
  endDate: Date;
};

export const useDateRange = (initialStartDate: Date, initialEndDate: Date) => {
  const [dateRange, setDateRange] = useState<DateRange>({ startDate: initialStartDate, endDate: initialEndDate });

  const changeDateRange = (action: string) => {
    const increment = action === 'next' ? 1 : -1;

    const prevDay = new Date(dateRange.startDate);
    prevDay.setDate(prevDay.getDate() + increment);

    const nextDay = new Date(dateRange.endDate);
    nextDay.setDate(nextDay.getDate() + increment);
    setDateRange({ startDate: prevDay, endDate: nextDay });
  };

  return { dateRange, changeDateRange };
};
