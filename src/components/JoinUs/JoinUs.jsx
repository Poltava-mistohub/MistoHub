import { useModal } from '../../contexts/ModalHook';

import Background from './Background/Background';
import {
  JoinUsSection,
  JoinUsContainer,
  Description,
  StatsContainer,
  StatsList,
  StatsTitle,
  Title,
  StatsListItem,
  JoinButton,
  AlreadyJoined,
} from './JoinUs.styled';

const JoinUs = ({ people = [], companies = [], goalData = null }) => {
  const { openModal } = useModal();

  return (
    <JoinUsSection id="how">
      <JoinUsContainer>
        <Title>Приєднуйся до спільноти людей, які змінюють Полтаву!</Title>
        <Description>
          Саме імпакт-інвестори будуть впливати на розподіл коштів серед
          проєктів містян
        </Description>
        <StatsContainer>
          <StatsTitle>До відкриття МІСТОХАБ залишилось:</StatsTitle>
          <StatsList>
            {
              goalData ? (
                <StatsListItem>
                  $ {goalData.goal - goalData.raised}
                </StatsListItem>
              ) : null
            }
          </StatsList>
        </StatsContainer>
        <JoinButton type="button" onClick={() => openModal('join_modal')}>
          Приєднатися
        </JoinButton>
        <AlreadyJoined>
          <p>{people?.length > 100 && <span>100+ людей</span>}</p>
          <p>{companies?.length > 10 && <span>10+ компаній</span>}</p>
          вже приєдналися
        </AlreadyJoined>
        <Background />
      </JoinUsContainer>
    </JoinUsSection>
  );
};

export default JoinUs;
