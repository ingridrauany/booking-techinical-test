import { convertDateToString } from './convertDateToString';

export const getDatesInRange = (startDate: string, endDate: string) => {
  if (startDate === '' || endDate === '') {
    return [];
  }

  const dateArray = [];
  let currentDate = new Date(startDate);

  while (currentDate <= new Date(endDate)) {
    dateArray.push(convertDateToString(currentDate));
    currentDate.setDate(currentDate.getDate() + 1);
  }

  return dateArray;
};
