import styled from 'styled-components';

export const StyledButton = styled.button`
  color: rgba(11, 11, 11, 0.5);
  stroke: rgba(11, 11, 11, 0.5);
  padding: 0;
  display: flex;
  align-items: center;
  gap: 4px;
  background: none;
  border: none;
  font-family: inherit;
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: -0.02em;
  font-size: 16px;
  
  &:hover,
  &:active {
    color: #0b0b0b;
    stroke: #0b0b0b;
  }

  span {
    display: none;
  }

  @media screen and (min-width: 768px) {
    span {
      display: inline;
    }
  }
`;
