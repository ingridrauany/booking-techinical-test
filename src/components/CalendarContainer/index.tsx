import { CalendarContainerStyled, CalendarHeaderStyled, CalendarItensStyled } from './styles';

export const CalendarContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <CalendarContainerStyled>
      <CalendarHeaderStyled>
        <h2>Schedule your session!</h2>
        <p>Timezone: Lisbon (+1)</p>
      </CalendarHeaderStyled>
      <CalendarItensStyled>{children}</CalendarItensStyled>
    </CalendarContainerStyled>
  );
};
