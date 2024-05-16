import styled from 'styled-components';

export const ScheduleDateStyled = styled.div`
  padding: 10px 20px;
  text-align: center;
  -webkit-box-shadow: 0px 16px 39px -20px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 16px 39px -20px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 16px 39px -20px rgba(0, 0, 0, 0.75);
  margin-bottom: 10px;

  .weekDay {
    font-size: 0.8rem;
  }
`;

export const ScheduleItemStyled = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ScheduleButtonPrevStyled = styled.button`
  position: absolute;
`;

export const ScheduleButtonNextStyled = styled.button`
  position: absolute;
  right: 0;
`;
