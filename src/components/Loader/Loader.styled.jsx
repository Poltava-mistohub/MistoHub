import styled, { keyframes } from 'styled-components';

export const spinner = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

export const LoaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  .house-svg {
    margin-right: 20px;
    fill: #f77d07;
  }

  .wave-svg {
    fill: #f77d07;
    margin-left: 3px;
  }
`;

export const Text = styled.div`
  text-align: center;
  color: #fff;
  margin: 0;
  margin-top: -60px;
  margin-right: 40px;
  -webkit-text-stroke: 0.5px #0b0b0b;
  font-size: 25px;
  animation: ${spinner} 2s linear infinite;
`;
