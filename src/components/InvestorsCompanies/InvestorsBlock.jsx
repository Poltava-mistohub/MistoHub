import InvestorsPeople from './InvestorsPeople/InvestorsPeople';
import InvestorsCompanies from './InvestorsCompanies/InvestorsCompanies';
import { getWordForCount } from '../../helpers/semantic';

import {
  InfoText,
  MainHeading,
  PeopleContainer,
  SecondHeading,
  TextWrapper,
} from './InvestorsBlock.styled';

const InvestorsBlock = ({ people, companies }) => {
  return (
    <section id="investors">
      <TextWrapper>
        <InfoText>Імпакт-інвестори МІСТОХАБ</InfoText>
        <MainHeading>З нами вже</MainHeading>
        {people?.length > 0 && (
          <SecondHeading>
            {people.length} {getWordForCount(people.length, 'p')}
          </SecondHeading>
        )}
      </TextWrapper>
      <PeopleContainer>
        {people && <InvestorsPeople people={people} />}

        <TextWrapper>
          {companies?.length > 0 && (
            <SecondHeading>
              {companies.length} {getWordForCount(companies.length, 'k')}
            </SecondHeading>
          )}
        </TextWrapper>
        {companies && <InvestorsCompanies companies={companies} />}
      </PeopleContainer>
    </section>
  );
};

export default InvestorsBlock;
