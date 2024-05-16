export const getCurrentWeekMondayAndFriday = (date: Date): Date[] => {
  const currentDayOfWeek = date.getDay();
  const distanceToMonday = currentDayOfWeek === 0 ? -6 : 1 - currentDayOfWeek;
  const distanceToFriday = 5 - currentDayOfWeek;

  const monday = new Date(date);
  monday.setDate(date.getDate() + distanceToMonday);

  const friday = new Date(date);
  friday.setDate(date.getDate() + distanceToFriday);

  return [monday, friday];
};
