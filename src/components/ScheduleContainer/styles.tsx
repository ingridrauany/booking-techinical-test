import styled from 'styled-components';

export const ScheduleContainerStyled = styled.section``;

export const ScheduleItemStyled = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ScheduleDateStyled = styled.div`
  padding: 10px 20px;
  text-align: center;

  .weekDay {
    font-size: 0.8rem;
  }
`;

export const ScheduleHeaderStyled = styled.div`
  background: #0078d7;
  color: #fff;
  text-align: center;
  padding: 10px;
`;

export const ScheduleItensStyled = styled.div`
  display: flex;
  flex-direction: row;
`;
