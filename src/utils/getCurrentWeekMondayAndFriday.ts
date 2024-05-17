import { convertDateToString } from './convertDateToString';

export const getCurrentWeekMondayAndFriday = (date: Date): string[] => {
  const currentDayOfWeek = date.getDay();

  const distanceToMonday = currentDayOfWeek === 0 ? 0 : 0 - currentDayOfWeek;
  const distanceToFriday = currentDayOfWeek === 0 ? 4 : 4 - currentDayOfWeek;

  const monday = new Date(date);
  monday.setDate(date.getDate() + distanceToMonday);

  const friday = new Date(date);
  friday.setDate(date.getDate() + distanceToFriday);

  const mondayString = convertDateToString(monday);
  const fridayString = convertDateToString(friday);

  return [mondayString, fridayString];
};
