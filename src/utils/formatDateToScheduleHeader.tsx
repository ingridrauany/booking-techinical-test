export const formateDateToScheduleHeader = (dateString: string): JSX.Element => {
  const options: Intl.DateTimeFormatOptions = {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
  };
  const date = new Date(dateString);
  const formattedDate = date.toLocaleDateString('en-US', options).replace(',', '').toUpperCase();
  const [weekday, monthDay, numberDay] = formattedDate.split(' ');

  return (
    <div>
      <div className="weekDay">{weekday}</div>
      <div>
        {monthDay} {numberDay}
      </div>
    </div>
  );
};
