import { useDateRange } from '@hooks/useDateRange';
import { getCurrentWeekMondayAndFriday } from '@utils/index';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';
import { ScheduleData } from 'src/types/Schedule';
import { ScheduleButtonNextStyled, ScheduleButtonPrevStyled } from './styles';

export const Schedule = ({ schedule }: { schedule: ScheduleData }) => {
  const today = new Date();
  const [startDate, endDate] = getCurrentWeekMondayAndFriday(today);
  const { changeDateRange } = useDateRange(startDate, endDate);

  return (
    <>
      <ScheduleButtonPrevStyled onClick={() => changeDateRange('prev')}>
        <FaArrowAltCircleLeft />
      </ScheduleButtonPrevStyled>
      <ScheduleButtonNextStyled onClick={() => changeDateRange('next')}>
        <FaArrowAltCircleRight />
      </ScheduleButtonNextStyled>
      {/*Object.entries(schedule).map(([date, times]) => (
        <ScheduleItemStyled key={date}>
          <ScheduleDateStyled>
            <CalendarHeaderDate date={date} />
          </ScheduleDateStyled>
          {times.map(({ id, time }: { id: string; time: string }) => (
            <ScheduleButton key={id} time={time} />
          ))}
        </ScheduleItemStyled>
      ))*/}
    </>
  );
};
