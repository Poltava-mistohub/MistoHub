
import { useMediaQuery } from 'react-responsive';
import { CompanyWrapper, PartnersList } from './InvestorsCompanies.styled';
import defaultImage from 'src/assets/investors/default-img.png';
import { makerAnimParams } from '../../../helpers/makerAnimParams';
import { getCompanyLogoURL } from './getInvestorLogo';

const PartnerCompanies = ({ companies: companiesData }) => {
  const isDesktop = useMediaQuery({ minWidth: 1440 });
  const isTablet = useMediaQuery({ minWidth: 768 });

  if (!companiesData) return;

  return (
    <CompanyWrapper>
      {Array.isArray(companiesData) && (
        <PartnersList
          $anim={makerAnimParams(companiesData.length, isDesktop, isTablet)}
        >
          {Array.from([...companiesData, ...companiesData]).map(
            (company, index) => (
              <li
                // Since companies are repeated, we need to have unique yet stable key
                key={index}
              >
                <a
                  href={company.link}
                  target='_blank'
                  rel="noreferrer"
                  title={company.name}
                >
                  <img
                    loading="lazy"
                    fetchpriority='low'
                    src={company.logoURL ? 
                      getCompanyLogoURL(
                        company.logoURL,
                        { width: 580, height: 290 },
                        company.logoCrop,
                        company.logoFocalScope,
                      ) :
                      defaultImage
                    }
                    alt={`Company ${company.id}`}
                    title={company.name}
                  />
                </a>
              </li>
            )
          )}
        </PartnersList>
      )}
    </CompanyWrapper>
  );
};

export default PartnerCompanies;
