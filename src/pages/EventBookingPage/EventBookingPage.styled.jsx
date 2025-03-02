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

  .title_3 {
    margin-bottom: 5px;
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
    width: 28px;
    height: 30px;
    display: inline-block;
    vertical-align: top;
    margin-right: 8px;
    content: url(${checkmarkIcon});
  }

  .unordered_list[data-list-variant="space-usage"] li {
    vertical-align: baseline;
  }

  .unordered_list[data-list-variant="space-usage"] li::before {
    width: 39px;
    height: 39px;
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

  .space_block {
    margin-bottom: 100px;
  }

  .schedule_block {
    margin-bottom: 53px;
  }

  .price_block {
    margin-bottom: 100px;
  }

  .booking_info_block {
    margin-bottom: 83px;

    .title-3 {
      margin-bottom: 40px;
    }

    .unordered_list {
      margin-left: 15px;
      font-size: 33.22px;
      line-height: 120.5%;
      letter-spacing: 0;
    }
  }


  .space_usage_block {
    margin-bottom: 115px;

    .title-3 {
      margin-bottom: 35px;
    }

    .unordered_list {
      font-size: 33.22px;
      line-height: 112%;
      letter-spacing: 0;
    }
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
    padding: 0 115px;
    height: 120px;
    margin: 0 auto;
    background: #FA7428;
    border-radius: 60px;
    color: #FFFFFF;
    display: block;
    max-width: 100%;

    font-family: 'Fixel Display';
    font-style: normal;
    font-weight: 500;
    font-size: 52px;
    border: none;
    cursor: pointer;
  }

  .icon_octagon {
    position: absolute;
    bottom: -65px;
    left: -139px;
    width: 281px;
    height: 281px;
    transform: rotate(39deg);
    z-index: -1;
  }

  .icon_circle {
    position: absolute;
    top: 70px;
    right: -175px;
    width: 414px;
    height: 414px;
    z-index: -1;
  }

  @media (min-width: 1440px) {
    .unordered_list {
      font-size: 28px;
      line-height: 1.21;
    }

    .icon-octagon {
      left: 50%; /* Example: stick to the center */
      transform: rotate(39deg) translateX(calc(-50% - 720px)); /* Center horizontally */
    }

    .icon_circle {
      left: 50%; /* Example: stick to the center */
      transform: translateX(calc(-50% + 720px)); /* Center horizontally */
    }
  }

  @media only screen and (min-width: 768px) {
    .unordered_list {
      font-size: 24px;
      line-height: 1.33;
    }
  }
`;
