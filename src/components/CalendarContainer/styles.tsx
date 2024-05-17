import styled from 'styled-components';

export const CalendarContainerStyled = styled.section`
  box-shadow: 0px 3px 24px -7px rgba(0, 0, 0, 0.75);
  position: relative;
  overflow: hidden;
`;

export const CalendarHeaderStyled = styled.div`
  background: #0078d7;
  color: #fff;
  text-align: center;
  padding: 10px;
`;

export const CalendarItensStyled = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0 20px;

  @media (max-width: 399px) {
    overflow: scroll;
  }
`;
