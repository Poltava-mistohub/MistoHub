import styled from '@emotion/styled';
import Container from '../Container/Container';

export const ContentBlockStyled = styled(Container)`
  width: 100%;
  min-width: 320px;
  max-width: 375px;
  padding: 60px 16px 60px;
  margin: 0 auto;
  outline: none;

  @media (min-width: 768px) {
    width: 768px;
    min-width: unset;
    max-width: unset;
    padding: 120px 32px 120px;
  }

  @media (min-width: 1440px) {
    width: 1440px;
    padding: 150px 120px 150px;
  }
`;
