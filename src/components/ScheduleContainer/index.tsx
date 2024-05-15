import { ScheduleContainerStyled, ScheduleHeaderStyled, ScheduleItensStyled } from './styles';

export const ScheduleContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <ScheduleContainerStyled>
      <ScheduleHeaderStyled>
        <h2>Schedule your session!</h2>
        <p>Timezone: Lisbon (+1)</p>
      </ScheduleHeaderStyled>
      <ScheduleItensStyled>{children}</ScheduleItensStyled>
    </ScheduleContainerStyled>
  );
};
