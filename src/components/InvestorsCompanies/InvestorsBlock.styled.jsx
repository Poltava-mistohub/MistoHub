import styled from 'styled-components';
import Container from '../../shared/Container/Container';

export const TextWrapper = styled(Container)`
  padding-top: 60px;
  margin-bottom: 32px;
  position: relative;

  @media screen and (min-width: 768px) and (max-width: 1439.9px) {
    padding-top: 120px;
    margin-bottom: 60px;
  }

  @media screen and (min-width: 1440px) {
    padding-top: 150px;
    margin-bottom: 80px;
  }
`;

export const PartnersTextWrapper = styled(TextWrapper)`
  padding-top: 30px;
  margin-bottom: 32px;

  @media screen and (min-width: 768px) and (max-width: 1439.9px) {
    padding-top: 30px;
    margin-bottom: 64px;
  }

  @media screen and (min-width: 1440px) {
    padding-top: 30px;
    margin-bottom: 115px;
  }
`;

export const PartnersIllustration = styled('img')`
  display: none;
  position: absolute;
  right: 16px;
  bottom: 0;
  width: 245px;

  @media screen and (min-width: 768px) and (max-width: 1439.9px) {
    display: block;
    right: 32px;
  }

  @media screen and (min-width: 1440px) {
    display: block;
    right: 120px;
  }
`;


export const PeopleContainer = styled(Container)`
  padding: 0;
`;

export const InfoText = styled.p`
  color: rgba(11, 11, 11, 0.5);
  font-size: 14px;
  line-height: 18px;
  letter-spacing: -0.28px;

  @media screen and (min-width: 768px) and (max-width: 1439.9px) {
    font-size: 16px;
    line-height: 24px;
    letter-spacing: -0.32px;
    margin-bottom: 16px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 16px;
    line-height: 24px;
    letter-spacing: -0.32px;
    margin-bottom: 30px;
  }
`;

export const MainHeading = styled.h2`
  color: #0b0b0b;
  font-family: Oddval;
  font-size: 24px;
  font-weight: 600;
  line-height: 32px;
  letter-spacing: -0.48px;

  @media screen and (min-width: 768px) and (max-width: 1439.9px) {
    font-size: 45px;
    line-height: 50px;
    letter-spacing: -0.9px;
    margin-bottom: 16px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 60px;
    font-weight: 600;
    line-height: 68px;
    letter-spacing: -1.2px;
    margin-bottom: 30px;
  }
`;

export const SecondHeading = styled.p`
  color: rgba(11, 11, 11, 0.8);
  font-size: 16px;
  line-height: 20px;
  letter-spacing: -0.32px;

  @media screen and (min-width: 768px) and (max-width: 1439.9px) {
    font-size: 24px;
    line-height: 32px;
    letter-spacing: -0.48px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 28px;
    line-height: 34px;
    letter-spacing: -0.56px;
  }
`;
