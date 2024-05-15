import { ScheduleButtonStyled } from './styles';

export const ScheduleButton = ({ time }: { time: string }) => {
  return <ScheduleButtonStyled>{time}</ScheduleButtonStyled>;
};
