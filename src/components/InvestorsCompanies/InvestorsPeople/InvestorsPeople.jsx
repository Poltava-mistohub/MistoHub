import { useEffect, useMemo, useState } from 'react';
import ModalInvestors from '../ModalInvestors/ModalInvestors';
import {
  ListWrapper,
  GroupContainer,
  Container,
} from './InvestorsPeople.styled';
import { useMediaQuery } from 'react-responsive';
import { confirmTriggerZone } from '../../../helpers/confirmTriggerZone';
import { makerGroupsToAnim } from '../../../helpers/makerGroupsToAnim';
import defaultImage from 'src/assets/investors/noname.jpg';

const getFullName = (investor) => {
  return [
    (investor.firstName || '').trim(),
    (investor.secondName || '').trim(),
  ].join(' ');
};

const InvestorsPeople = ({ people }) => {
  const [peopleData, setPeopleData] = useState(null);
  const [selectedInvestor, setSelectedInvestor] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ maxWidth: 1440 });
  const imgStyle = {
    background: `rgb(212,213,209) center / contain no-repeat url(${defaultImage})`,
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const newGroups = makerGroupsToAnim(people);
        // const newGroups = [];
        // for (let i = 0; i < people.length; i += 25) {
        //   newGroups.push(people.slice(i, i + 25));
        // }
        setPeopleData(newGroups);
      } catch (error) {
        console.error('Error fetching people data:', error);
      }
    };
    fetchData();
  }, [people]);

  const checkPosition = useMemo(() => {
    return (containerIndex) => {
      const container = document.getElementById(`investors-anim`);
      const containerGroup = document.getElementById(
        `container-${containerIndex}`
      );
      const elements = containerGroup.getElementsByClassName('item-list');

      for (const element of elements) {
        const rectEl = element.getBoundingClientRect();
        const rectContainer = container.getBoundingClientRect();

        const isDisabledEl = confirmTriggerZone(
          containerIndex,
          rectEl,
          rectContainer,
          isMobile,
          isTablet,
          peopleData
        );

        if (isDisabledEl) {
          element.classList.add('on-blur');
          element.disabled = true;
        } else {
          element.classList.remove('on-blur');
          element.disabled = false;
        }
      }
    };
  }, [isMobile, isTablet, peopleData]);

  useEffect(() => {
    if (!peopleData) return;

    const intervalId = setInterval(() => {
      for (let i = 0; i < peopleData.length; i++) {
        checkPosition(i);
      }
    }, 50);

    return () => clearInterval(intervalId);
  }, [peopleData, checkPosition]);

  const openModal = (investor) => {
    setSelectedInvestor(investor);
    setIsOpen(true);
  };

  const closeModal = () => {
    setSelectedInvestor(null);
    setIsOpen(false);
  };

  return (
    <ListWrapper>
      <Container id="investors-anim">
        {peopleData?.map((group, index) => (
          <GroupContainer
            id={`container-${index}`}
            // key should be static per group, so usage index is fine
            key={`group-${index}`}
            $length={group.length}
            className={`group-${index} ${index % 2 === 0 ? 'odd-group' : 'even-group'}`}
          >
            <ul>
              {group.map((investor, investorIndex) => (
                <li
                  // key should be static per unique item,
                  // but since duplicates in data occurring, index is used
                  key={investorIndex}
                >
                  <button
                    data-group_id={index}
                    className="item-list"
                    type="button"
                    onClick={() => openModal(investor)}
                  >
                    <img
                      // empty alt to not have broken image icon,
                      // and have a visual fallback in background
                      alt=""
                      title={getFullName(investor)}
                      src={investor.imageURL ? investor.imageURL : null}
                      style={imgStyle}
                      loading="lazy"
                    />
                  </button>
                </li>
              ))}
            </ul>
          </GroupContainer>
        ))}
      </Container>
      {selectedInvestor && (
        <ModalInvestors
          data={selectedInvestor}
          onClose={closeModal}
          isOpen={isOpen}
        />
      )}
    </ListWrapper>
  );
};

export default InvestorsPeople;
