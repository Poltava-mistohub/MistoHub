import { useState, useEffect, useRef, lazy, Suspense } from 'react';

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
  CardTitle,
  ButtonTour,
  Arrow,
  LeftArrow,
  RightArrow,
} from './Visualization.styled';
import Iconsvg from '../Icon/Icon';

const TourModal = lazy(
  () => import('/src/components/Visualization/TourModal.jsx')
);

const Visualization = () => {
  const isDesktop = useMediaQuery({ minWidth: 1440 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1439 });
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const [currentCard, setCurrentCard] = useState(0);
  const [isTourOpen, setIsTourOpen] = useState([false, false]);

  const photoSphereRef = useRef();

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
    if (
      !isTourOpen.some((open) => open) &&
      currentCard < images.length - (isDesktop ? 2 : 1)
    ) {
      setCurrentCard(currentCard + 1);
    }
  };

  const prevCard = () => {
    if (!isTourOpen.some((open) => open) && currentCard > 0) {
      setCurrentCard(currentCard - 1);
    }
  };

  const toggleTour = (index) => {
    setIsTourOpen(isTourOpen.map((open, i) => (i === index ? !open : false)));
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
                {!isTourOpen[index] ? (
                  <div>
                    <CardTitle>{image.title}</CardTitle>
                    <ButtonTour onClick={() => toggleTour(index)} type="button">
                      Віртуальний тур
                    </ButtonTour>
                  </div>
                ) : (
                  <Suspense>
                    <TourModal
                      ref={photoSphereRef}
                      image={image.tourImage}
                      onClose={() => toggleTour(index)}
                    />
                  </Suspense>
                )}
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
