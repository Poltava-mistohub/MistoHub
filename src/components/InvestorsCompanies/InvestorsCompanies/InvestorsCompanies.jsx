import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import ModalCompanies from '../ModalCompanies/ModalCompanies';
import { CompaniesList, CompanyWrapper } from './InvestorsCompanies.styled';
import defaultImage from 'src/assets/investors/default-img.png';
import { makerAnimParams } from '../../../helpers/makerAnimParams';
import { getCompanyLogoURL } from './getInvestorLogo';

const InvestorsCompanies = ({ companies: companiesData }) => {
  const [selectedCompanies, setSelectedCompanies] = useState(null);
  const isDesktop = useMediaQuery({ minWidth: 1440 });
  const isTablet = useMediaQuery({ minWidth: 768 });

  const openModal = (company) => {
    setSelectedCompanies(company);
  };

  const closeModal = () => {
    setSelectedCompanies(null);
  };

  if (!companiesData) return;

  return (
    <CompanyWrapper>
      {Array.isArray(companiesData) && (
        <CompaniesList
          $anim={makerAnimParams(companiesData.length, isDesktop, isTablet)}
        >
          {Array.from([...companiesData, ...companiesData]).map(
            (company, index) => (
              <li
                // Since companies are repeated, we need to have unique yet stable key
                key={index}
              >
                <img
                  loading="lazy"
                  fetchpriority='low'
                  src={company.logoURL ? 
                    getCompanyLogoURL(
                      company.logoURL,
                      { width: 360, height: 280 },
                      company.logoCrop,
                      company.logoFocalScope,
                    ) :
                    defaultImage
                  }
                  alt={`Company ${company.id}`}
                  title={company.name}
                  onClick={() => openModal(company)}
                />
              </li>
            )
          )}
          {selectedCompanies && (
            <ModalCompanies
              isOpen={selectedCompanies !== null}
              data={selectedCompanies}
              onClose={closeModal}
            />
          )}
        </CompaniesList>
      )}
    </CompanyWrapper>
  );
};

export default InvestorsCompanies;
