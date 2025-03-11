import { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

import { heroData } from '/src/constants/dataHeroSwiper.js';
import { HeroSectionStyled } from '/src/components/HeroSection/HeroSection.styled';
import { HeroContainer } from '/src/components/HeroSection/HeroSection.styled';
import Icon from '/src/components/Icon/Icon';
import { HeroPicture } from '../../shared/HeroPicture/HeroPicture';

import { H1Styled } from '../../shared/Text/H1.styled';

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
            // Slide should not be re-mounted sho key should be stale
            <SwiperSlide key={idx}>
              <HeroPicture item={item} priority={idx === 0} />
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
        <H1Styled className="hero-title">
          <span>МІСТОХАБ -</span>
          <br />
          простір розвитку міста
        </H1Styled>
      </HeroContainer>
    </HeroSectionStyled>
  );
};

export default HeroSection;
