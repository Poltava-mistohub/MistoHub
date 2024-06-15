import { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { nanoid } from 'nanoid';
import 'swiper/css';
import 'swiper/css/navigation';

import { heroData } from '/src/constants/dataHeroSwiper.js';
import { HeroSectionStyled } from '/src/components/HeroSection/HeroSection.styled';
import { HeroContainer } from '/src/components/HeroSection/HeroSection.styled';
import Icon from '/src/components/Icon/Icon';

const HeroSection = () => {
  const swiperRef = useRef(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  useEffect(() => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.on('slideChange', () => {
        setIsBeginning(swiperRef.current.swiper.isBeginning);
        setIsEnd(swiperRef.current.swiper.isEnd);
      });
    }
  }, []);

  const slideNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const slidePrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  return (
    <HeroSectionStyled>
      <HeroContainer>
        <Swiper ref={swiperRef} className="my-swiper" navigation={true}>
          {heroData.map((item, idx) => (
            <SwiperSlide key={nanoid()}>
              <picture>
                <source
                  srcSet={`${item.mobile.webp} 375w, ${item.mobile.webp_2x} 750w`}
                  media="(max-width: 767px)"
                  sizes="(max-width: 767px) 375px, 100%"
                  type="image/webp"
                />
                <source
                  srcSet={`${item.tablet.webp} 768w, ${item.tablet.webp_2x} 1536w`}
                  media="(min-width: 768px) and (max-width: 1439px)"
                  sizes="(min-width: 768px) and (max-width: 1439px) 768px, 100%"
                  type="image/webp"
                />
                <source
                  srcSet={`${item.desktop.webp} 1440w, ${item.desktop.webp_2x} 2880w`}
                  media="(min-width: 1440px)"
                  sizes="(min-width: 1440px) 1440px, 100%"
                  type="image/webp"
                />
                <img
                  fetchpriority={idx === 0 ? 'high' : 'low'}
                  loading={idx === 0 ? 'eager' : 'lazy'}
                  className="hero-img"
                  src={item.desktop.png}
                  alt={item.alt}
                />
              </picture>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="custom-navigation">
          <button
            className={`swiper-btn-prev ${isBeginning ? 'disabled' : ''}`}
            onClick={slidePrev}
            disabled={isBeginning}
            type="button"
            title="Попередній слайд"
          >
            <Icon iconName="arrow-left2" />
          </button>
          <button
            className={`swiper-btn-next ${isEnd ? 'disabled' : ''}`}
            onClick={slideNext}
            disabled={isEnd}
            type="button"
            title="Наступний слайд"
          >
            <Icon iconName="arrow-right2" />
          </button>
        </div>
        <h1 className="hero-title">
          <span>МІСТОХАБ -</span>
          <br />
          створюємо простір
          <br />
          розвитку міста
        </h1>
      </HeroContainer>
    </HeroSectionStyled>
  );
};

export default HeroSection;
