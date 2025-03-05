import { useState, useEffect } from 'react';

import { useMediaQuery } from 'react-responsive';
import { nanoid } from 'nanoid';

import { images } from '../../constants/ImageImportsVisualization';
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
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1439 });
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const [currentCard, setCurrentCard] = useState(0);

  const setImageSrc = (cardIndex) => {
    if (isDesktop) {
      return images[cardIndex].src.desktop;
    } else if (isTablet) {
      return images[cardIndex].src.tablet;
    } else if (isMobile) {
      return images[cardIndex].src.mobile;
    }
  };

  const setImageSrcSet = (cardIndex) => {
    if (isDesktop) {
      return images[cardIndex].srcSet.desktop;
    } else if (isTablet) {
      return images[cardIndex].srcSet.tablet;
    } else if (isMobile) {
      return images[cardIndex].srcSet.mobile;
    }
  };

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
            .map((image, index) => (
              <Card
                key={nanoid()}
                style={{
                  backgroundImage: `url('${setImageSrc((currentCard + index) % images.length)}')`,
                  backgroundSize: 'cover',
                }}
              >
                <img
                  src={setImageSrc((currentCard + index) % images.length)}
                  srcSet={setImageSrcSet((currentCard + index) % images.length)}
                  alt={image.title}
                  style={{ display: 'none' }}
                />
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
