import { formateDateToScheduleHeader } from '@utils/index';

export const CalendarHeaderDate = ({ date }: { date: string }) => {
  const [day, week, dayNumber] = formateDateToScheduleHeader(date);

  return (
    <div>
      <div className="weekDay">{week}</div>
      <div>
        {day} {dayNumber}
      </div>
    </div>
  );
};
