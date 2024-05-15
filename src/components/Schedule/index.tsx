import { formateDateToScheduleHeader } from '@utils/index';
import { ScheduleData } from 'src/types/Schedule';
import { ScheduleButton } from '../ScheduleButton';
import { ScheduleDateStyled, ScheduleItemStyled } from '../ScheduleContainer/styles';

export const Schedule = (schedule: ScheduleData) => {
  return (
    <>
      {Object.entries(schedule.schedule).map(([date, times]) => (
        <ScheduleItemStyled key={date}>
          <ScheduleDateStyled>{formateDateToScheduleHeader(date)}</ScheduleDateStyled>
          {times.map(({ id, time }: { id: string; time: string }) => (
            <ScheduleButton key={id} time={time} />
          ))}
        </ScheduleItemStyled>
      ))}
    </>
  );
};
