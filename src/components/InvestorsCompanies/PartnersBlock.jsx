import {
  MainHeading,
  PeopleContainer,
  SecondHeading,
  TextWrapper,
} from './InvestorsBlock.styled';
import PartnerCompanies from './InvestorsCompanies/PartnerCompanies';

const PartnersBlock = ({ companies }) => {
  return (
    <section id="partners">
      <TextWrapper>
        <MainHeading>Партнери </MainHeading>
        <SecondHeading>
          які підтримали МІСТОХАБ 
        </SecondHeading>
      </TextWrapper>
      <PeopleContainer>
        {companies && <PartnerCompanies companies={companies} />}
      </PeopleContainer>
    </section>
  );
};

export default PartnersBlock;
