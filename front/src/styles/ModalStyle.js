import styled, { keyframes } from 'styled-components';

export const Background = styled.div`
  height: 100%;
  width: 100%;
  z-index: 90;
  display: grid;
  place-items: center;
  position: fixed;
  left: 0;
  top: 0;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const fadeIn = keyframes`
from {
  opacity: 0;
  margin-top: -50px;
}
to {
  opacity: 1;
  margin-top: -100;
}
`;

export const Content = styled.div`
  width: 600px;
  hieght: 100%;
  padding: 20px 0px;
  margin-top: 70px;
  position: relative;
  border-radius: 10px;
  background: white;
  animation: ${fadeIn} 0.4s ease-out;
`;
