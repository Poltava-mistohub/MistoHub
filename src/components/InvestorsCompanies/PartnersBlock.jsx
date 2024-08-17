import {
  MainHeading,
  PeopleContainer,
  SecondHeading,
  PartnersTextWrapper,
  PartnersIllustration,
} from './InvestorsBlock.styled';
import PartnerCompanies from './InvestorsCompanies/PartnerCompanies';
import IllustrationSrc from '../../assets/investors/partners_illustration.svg';

const PartnersBlock = ({ companies }) => {
  return (
    <section id="partners">
      <PartnersTextWrapper>
        <PartnersIllustration src={IllustrationSrc} />
        <MainHeading>Партнери </MainHeading>
        <SecondHeading>
          які підтримали МІСТОХАБ 
        </SecondHeading>
      </PartnersTextWrapper>
      <PeopleContainer>
        {companies && <PartnerCompanies companies={companies} />}
      </PeopleContainer>
    </section>
  );
};

export default PartnersBlock;
