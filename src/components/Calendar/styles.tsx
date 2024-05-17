import styled from 'styled-components';

export const CalendarDateStyled = styled.div`
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

export const CalendarItemStyled = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 90px;
`;

export const CalendarButtonPrevStyled = styled.button`
  position: absolute;
  cursor: pointer;
  background: transparent;
  border: 0;
  font-size: 1.5rem;
  top: 90px;
  left: 0;
`;

export const CalendarButtonNextStyled = styled.button`
  position: absolute;
  right: 0;
  cursor: pointer;
  background: transparent;
  border: 0;
  font-size: 1.5rem;
  top: 90px;
`;
