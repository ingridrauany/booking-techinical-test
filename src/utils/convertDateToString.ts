export const convertDateToString = (date: Date): string => {
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: '2-digit', day: '2-digit', timeZone: 'UTC' };
  const formattedDate = new Intl.DateTimeFormat('en-CA', options).format(date);
  return formattedDate;
};
