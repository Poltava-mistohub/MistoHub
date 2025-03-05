import { useState, useEffect } from 'react';

import { useMediaQuery } from 'react-responsive';

import { heroData as images } from '../../constants/dataHeroSwiper';
import { HeroPicture } from '../HeroSection/HeroPicture';
import {
  VisualizationSection,
  VisualizationContainer,
  BlockName,
  Title,
  CardsContainer,
  Card,
  Arrow,
  LeftArrow,
  RightArrow,
} from './Visualization.styled';
import Iconsvg from '../Icon/Icon';

const Visualization = () => {
  const isDesktop = useMediaQuery({ minWidth: 1440 });

  const [currentCard, setCurrentCard] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setCurrentCard(currentCard);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [currentCard]);

  const nextCard = () => {
    if (currentCard < images.length - (isDesktop ? 2 : 1)) {
      setCurrentCard(currentCard + 1);
    }
  };

  const prevCard = () => {
    if (currentCard > 0) {
      setCurrentCard(currentCard - 1);
    }
  };

  return (
    <VisualizationSection id="design">
      <VisualizationContainer>
        <BlockName>Візуалізація</BlockName>
        <Title>Як всередині?</Title>
        <CardsContainer>
          {images
            .slice(currentCard, currentCard + (isDesktop ? 2 : 1))
            .map((image) => (
              <Card key={image.alt}>
                <HeroPicture item={image} priority={false} />
              </Card>
            ))}
        </CardsContainer>
        <Arrow>
          <LeftArrow
            type="button"
            className={`${currentCard > 0 ? 'enabled' : ''}`}
            onClick={prevCard}
            title="Попередній слайд"
          >
            <Iconsvg
              width="18"
              height="14"
              styles="icon-arrow"
              iconName="icon-arrow-back"
            />
          </LeftArrow>
          <RightArrow
            type="button"
            className={`${currentCard < images.length - (isDesktop ? 2 : 1) ? 'enabled' : ''}`}
            onClick={nextCard}
            title="Наступний слайд"
          >
            <Iconsvg
              width="18"
              height="14"
              styles="icon-arrow"
              iconName="icon-arrow-next"
            />
          </RightArrow>
        </Arrow>
      </VisualizationContainer>
    </VisualizationSection>
  );
};

export default Visualization;
