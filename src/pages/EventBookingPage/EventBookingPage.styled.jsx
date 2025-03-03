import { styled } from 'styled-components';

import { StyledContainer } from '../../shared/Container/Container.styled';

import checkmarkIcon from '../../assets/EventBooking/svg/checkmark.svg';
import prohibitedIcon from '../../assets/EventBooking/svg/prohibited.svg';
import redDotIcon from '../../assets/EventBooking/svg/red-dot.svg';
import sparcleIcon from '../../assets/EventBooking/svg/sparcle.svg';
import tearIcon from '../../assets/EventBooking/svg/tear.svg';

export const SpaceHeroBlock = styled.section`
  min-width: 320px;
  width: 100%;
  height: 700px;

  @media only screen and (min-width: 768px) {
    height: 1024px;
  }

  @media only screen and (min-width: 1440px) {
    height: 880px;
  }

  .title {
    position: absolute;
    margin: 0 auto;
    top: 162px;
    padding: 0 32px;
  }
`;

export const SpaceHeroContainer = styled(StyledContainer)`
  padding: 0;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  min-width: 320px;
  max-width: 100%;
  height: 700px;
  margin: 0 auto;

  @media only screen and (min-width: 768px) {
    min-width: 100%;
    height: 1024px;
  }

  @media only screen and (min-width: 1440px) {
    min-width: 100%;
    height: 880px;
  }

  .hero_img_wrapper {
    width: 100%;
    height: 100%;
  }

  .hero_img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const SpaceDetailsBlock = styled.section`
  width: 100%;
  overflow: hidden;

  .container {
    position: relative;
  }

  .title_2 {
    margin-bottom: 15px;
  }

  .unordered_list {
    list-style: none;
    list-style-position: inside;
    
    font-size: 16px;
    font-weight: 500;
    line-height: 1.25;
    letter-spacing: -0.02em;
    text-align: left;
    color: #0b0b0b;
  }

  .unordered_list[data-list-variant="hyphen"] {
    list-style-type: "- ";
  }

  .unordered_list[data-list-variant="disc"] {
    list-style-type: "• ";
  }

  .unordered_list[data-list-variant="checkmark"] li::before {
    width: 30px;
    display: inline-block;
    vertical-align: top;
    margin-right: 8px;
    content: url(${checkmarkIcon});
  }

  .unordered_list[data-list-variant="space-usage"] li {
    vertical-align: baseline;
  }

  .unordered_list[data-list-variant="space-usage"] li::before {
    // width: 30px;
    // height: 30px;
    margin-right: 8px;
    display: inline-block;
    vertical-align: sub;
  }

  .unordered_list[data-list-variant="space-usage"] li:nth-child(1)::before {
    content: url(${sparcleIcon});
  }

  .unordered_list[data-list-variant="space-usage"] li:nth-child(2)::before {
    content: url(${tearIcon});
  }

  .unordered_list[data-list-variant="space-usage"] li:nth-child(3)::before {
    content: url(${redDotIcon});
  }

  .unordered_list[data-list-variant="space-usage"] li:nth-child(4)::before {
    content: url(${prohibitedIcon});
  }

  .unordered_list[data-list-variant="space-usage"] li:nth-child(5)::before {
    content: "‼️";
    vertical-align: baseline;
    text-align: center;
  }

  .content_block {
    margin-bottom: 100px;
  }

  .icon_price {
    fill: none;
    margin-right: 15px;
  }

  .m_vertical_align {
    display: inline-block;
    vertical-align: middle;
  }

  .book_event_button {
    font-family: 'FixelDisplay', sans-serif;
    height: 48px;
    font-size: 14px;
    font-weight: 600;
    line-height: 1.3;
    letter-spacing: -0.02em;
    background-color: #f77d07;
    border-radius: 30px;
    border: none;
    color: #ffffff;
    padding: 15px 20px;
    display: block;
    margin: 0 auto;
    transition: all 0.25s ease-in-out;
    text-align: center;
    min-width: 170px;
  }

  .book_event_button:hover {
    background-color: #e97200;
  }

  .book_event_button:active {
    background-color: #e3e3e3;
    color: #898b90;
  }

  .icon_octagon {
    position: absolute;
    bottom: -65px;
    left: -90px;
    width: 181px;
    height: 181px;
    transform: rotate(39deg);
    z-index: -1;
  }

  .icon_circle {
    position: absolute;
    top: 40px;
    right: -105px;
    width: 214px;
    height: 214px;
    z-index: -1;
  }

  @media only screen and (min-width: 768px) {
    .unordered_list {
      font-size: 24px;
      line-height: 1.33;
    }

    .icon_octagon {
      width: 241px;
      height: 241px;
    }

    .icon_circle {
      top: 70px;
      right: -145px;
      width: 314px;
      height: 314px;
    }

    .title_2 {
      margin-bottom: 30px;
    }

    .book_event_button {
      height: 64px;
      padding: 20px 40px;
      text-align: center;
      font-size: 16px;
      align-items: center;
      line-height: 1.5;
    }
  }

  @media (min-width: 1440px) {
    .unordered_list {
      font-size: 28px;
      line-height: 1.21;
    }

    .icon_octagon {
      width: 281px;
      height: 281px;
      left: 50%;
      transform: translateX(calc(-50% - 720px)) rotate(39deg);
    }

    .icon_circle {
      width: 414px;
      height: 414px;
      left: 50%;
      transform: translateX(calc(-50% + 760px));
    }

    .book_event_button {
      height: 70px;
      padding: 23px 46px;
      font-size: 18px;
    }
  }
`;
