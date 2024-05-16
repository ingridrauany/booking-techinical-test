export const formateDateToScheduleHeader = (dateString: string): string[] => {
  if (!dateString) {
    return ['', '', ''];
  }

  const options: Intl.DateTimeFormatOptions = {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    timeZone: 'UTC',
  };
  const date = new Date(dateString + 'T00:00:00Z');
  const formattedDate = date.toLocaleDateString('en-US', options).replace(',', '').toUpperCase();
  const [weekday, monthDay, numberDay] = formattedDate.split(' ');

  return [weekday, monthDay, numberDay];
};
