import styled, { keyframes } from 'styled-components';

const rotating = keyframes`
  to {
    transform: rotate(1turn);
  }
`;

export const LoadingOverlayStyled = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
`;

export const LoadingIconStyled = styled.div`
  width: 50px;
  height: 50px;
  border: 6px solid #e5e5e5;
  border-top-color: #0078d7;
  border-radius: 50%;
  animation: ${rotating} 1s ease infinite;
`;
