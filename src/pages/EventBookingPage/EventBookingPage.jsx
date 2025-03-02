import React from 'react';

import eventPlace from '../../assets/EventBooking/img/event_place.png';
import eventPlace2x from '../../assets/EventBooking/img/event_place@2.png';
import eventPlaceWebp from '../../assets/EventBooking/img/event_place.webp';
import eventPlaceWebp2x from '../../assets/EventBooking/img/event_place@2.webp';

import Icon from '../../components/Icon/Icon';
import { HeroPicture } from '../../shared/HeroPicture/HeroPicture';
import { ContentBlockStyled } from '../../shared/ContentBlock/ContentBlock.styled';
import { H1Styled } from '../../shared/Text/H1.styled';
import { H2Styled } from '../../shared/Text/H2.styled';

import { SpaceHeroBlock, SpaceHeroContainer, SpaceDetailsBlock } from './EventBookingPage.styled';

const EventBookingPage = () => {
  return (
    <div className="event-page">
      <SpaceHeroBlock>
        <SpaceHeroContainer>
          <HeroPicture
            item={{
              mobile: {
                png: eventPlace,
                png_2x: eventPlace2x,
                webp: eventPlaceWebp,
                webp_2x: eventPlaceWebp2x,
              },
              tablet: {
                png: eventPlace,
                png_2x: eventPlace2x,
                webp: eventPlaceWebp,
                webp_2x: eventPlaceWebp2x,
              },
              desktop: {
                png: eventPlace,
                png_2x: eventPlace2x,
                webp: eventPlaceWebp,
                webp_2x: eventPlaceWebp2x,
              },
              alt: 'Kitchen 1',
            }}
            priority={true}
            hidden={false}
            className="hero_img_wrapper"
            imgClassName="hero_img"
          />
          <H1Styled className="title">
            Забронюй свій івент у МІСТОХАБ
          </H1Styled>
        </SpaceHeroContainer>
      </SpaceHeroBlock>

      <SpaceDetailsBlock>
        <div className="container">
          <Icon
            width="414"
            height="414"
            iconName="iconCircle"
            styles="icon_circle"
          />
          <ContentBlockStyled className="section_content">
            <div className="content_block">
              <H2Styled className="title_2">
                Простір:
              </H2Styled>
              <ul className="unordered_list" data-list-variant="hyphen">
                <li>
                  інклюзивний простір доступний для кожного
                </li>
                <li>
                  власне бомбосховище у радіусі 400 метрів
                </li>
                <li>
                  зручний паркінг
                </li>
                <li>
                  власне меню кейтерингу
                </li>
              </ul>
            </div>

            <div className="content_block">
              <H2Styled>
                Графік: 09:00–21:00
              </H2Styled>
            </div>

            <div className="content_block">
              <H2Styled className="title_2">
                <Icon
                  width="89"
                  height="45"
                  iconName="icon-price"
                  styles="icon_price m_vertical_align"
                />
                <span className="m_vertical_align">
                  Вартість:
                </span>
              </H2Styled>
              <ul className="unordered_list" data-list-variant="disc">
                <li>
                  1500 грн/год – половина зали (до 42 місць)
                </li>
                <li>
                  2500 грн/год – вся зала (до 80 місць)
                </li>
                <li>
                  Мінімальне бронювання – 2 години
                </li>
              </ul>
            </div>

            <div className="content_block">
              <H2Styled className="title_2">
                Як забронювати?
              </H2Styled>
              <ul className="unordered_list" data-list-variant="checkmark">
                <li>
                  Оплата – 100% передплата на рахунок ГО "МІСТО ХАБ"
                </li>
                <li>
                  Якщо плани зміняться – можемо перенести дату за погодженням з адміністратором
                </li>
              </ul>
            </div>

            <div className="content_block">
              <H2Styled className="title_2">
                Головне про використання простору
              </H2Styled>
              <ul className="unordered_list" data-list-variant="space-usage">
                <li>
                  Дбайте про порядок і майно – це спільний простір.
                </li>
                <li>
                  Використовуйте залу в межах заброньованого часу.
                </li>
                <li>
                  Замовляти свою їжу на подію не можливо!
                </li>
                <li>
                  Червоні лінії: без російськомовних матеріалів, політичного піару чи маніпуляцій.
                </li>
                <li>
                  Якщо є пошкодження майна – організатор відшкодовує ремонт або заміну.
                </li>
              </ul>
            </div>

            <button className="book_event_button">
              Провести подію
            </button>
            <Icon
              width="89"
              height="45"
              iconName="octagonIcon"
              styles="icon_octagon"
            />
          </ContentBlockStyled>
        </div>
      </SpaceDetailsBlock>
    </div>
  );
}

export default EventBookingPage;
