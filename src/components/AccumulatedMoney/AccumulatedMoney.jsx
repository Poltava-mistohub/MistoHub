import { useState, useEffect, useRef } from 'react';
import { Cards } from './Cards';
import FundraisingProgressBar from './FundraisingProgressBar';
import { ContainerWrapper, TitleContainer } from './AccumulatedMoney.styled';
import { useMediaQuery } from 'react-responsive';
import { useModal } from '../../contexts/ModalHook';
import needToDoTasks from '../../constants/NeedToDoTasks.json';
import madedTasks from '../../constants/MadedTasks.json';
import { CardsList } from './AccumulatedMoney.styled';

const AccumulatedMoney = ({ goalData }) => {
  const isDesktop = useMediaQuery({ minWidth: 1440 });
  const sectionRef = useRef(null);
  const { openModal } = useModal();

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      });
    });

    const currentRef = sectionRef.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <ContainerWrapper
      ref={sectionRef}
      isDesktop={isDesktop}
      goAnimation={isVisible}
      id="funds"
    >
      {goalData && (
        <>
          {!isDesktop ? (
            <>
              <TitleContainer>
                <h2>До відкриття залишилось </h2>
                <p>{`$ ${goalData.goal - goalData.raised}`}</p>
              </TitleContainer>
              <FundraisingProgressBar
                goAnimation={isVisible}
                totalAmount={goalData.raised}
                targetAmount={goalData.goal}
              />
              <CardsList>
                <Cards needToDoTasks={needToDoTasks} />
                <Cards madedTasks={madedTasks} />
              </CardsList>
              <button onClick={() => openModal('join_modal')} type="button">
                Підтримати проєкт
              </button>
            </>
          ) : (
            <>
              <ul>
                <Cards madedTasks={madedTasks} />
              </ul>
              <div>
                <TitleContainer>
                  <h2>До відкриття залишилось </h2>
                  <p>
                    {`$ ${goalData.goal - goalData.raised}`.replace(
                      /\B(?=(\d{3})+(?!\d))/g,
                      ' '
                    )}
                  </p>
                </TitleContainer>
                <FundraisingProgressBar
                  goAnimation={isVisible}
                  totalAmount={goalData.raised}
                  targetAmount={goalData.goal}
                />

                <button onClick={() => openModal('join_modal')} type="button">
                  Підтримати проєкт
                </button>
              </div>
              <ul>
                <Cards needToDoTasks={needToDoTasks} />
              </ul>
            </>
          )}
        </>
      )}
    </ContainerWrapper>
  );
};

export default AccumulatedMoney;
