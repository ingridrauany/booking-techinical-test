import { CalendarTimeButtonStyled } from './styles';

export const CalendarTimeButton = ({
  time,
  arialLabel,
  title,
}: {
  time: string;
  arialLabel: string;
  title: string;
}) => {
  return (
    <CalendarTimeButtonStyled aria-label={arialLabel} title={title}>
      {time}
    </CalendarTimeButtonStyled>
  );
};
