import { useEffect, useState, useMemo, lazy, Suspense } from 'react';
import { fetchCompanies, fetchPeople } from '../../services/API';
import { useLocation } from 'react-router-dom';

import Header from '/src/components/Header/Header';
import AboutProject from '../../components/About/AboutProject';
import ScrollToTopButton from '../../components/ScrollToTopButton/ScrollToTopButton';
import HeroSection from '/src/components/HeroSection/HeroSection';
import CoFounders from '../../components/CoFounders/CoFounders';
import JoinUs from '../../components/JoinUs/JoinUs';

const Visualization = lazy(
  () => import('/src/components/Visualization/Visualization.jsx')
);
const AccumulatedMoney = lazy(
  () => import('/src/components/AccumulatedMoney/AccumulatedMoney.jsx')
);
const InvestorsBlock = lazy(
  () => import('/src/components/InvestorsCompanies/InvestorsBlock.jsx')
);
const Footer = lazy(() => import('/src/components/Footer/Footer.jsx'));
const ModalsManager = lazy(
  () => import('/src/shared/Modals/ModalsManager.jsx')
);

const HomePage = () => {
  const [activeSection, setActiveSection] = useState('main');
  const location = useLocation();

  const [companies, setCompanies] = useState([]);
  const [people, setPeople] = useState([]);

  const memoizedFetchData = useMemo(
    () => async () => {
      try {
        const [companiesData, peopleData] = await Promise.all([
          fetchCompanies(),
          fetchPeople(),
        ]);
        setCompanies(companiesData);
        setPeople(peopleData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    },
    []
  );

  useEffect(() => {
    memoizedFetchData();
  }, [memoizedFetchData]);

  useEffect(() => {
    const { hash } = location;
    if (hash) {
      const sectionId = hash.substring(1);
      const sectionElement = document.getElementById(sectionId);
      if (sectionElement) {
        window.scrollTo({
          top: sectionElement.offsetTop - 100,
          behavior: 'smooth',
        });
      }
    }
  }, [location]);

  useEffect(() => {
    const mainURL = new URL(import.meta.env.BASE_URL, window.location.origin);

    const handleScroll = () => {
      const sectionElements = document.querySelectorAll('section');
      sectionElements.forEach((section) => {
        const firstSection = document.getElementById('about');
        const firstSectionTop = firstSection.offsetTop;
        if (window.scrollY < firstSectionTop - 110) {
          setActiveSection('main');
        }
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        if (
          window.scrollY >= sectionTop - 100 &&
          window.scrollY < sectionTop + sectionHeight - 100
        ) {
          setActiveSection(sectionId);

          if (`#${sectionId}` === window.location.hash || (!sectionId && !window.location.hash)) {
            return;
          }

          let targetURL = new URL(window.location.pathname, mainURL).toString();

          if (sectionId !== null) {
            const url = new URL(`#${sectionId}`, mainURL);

            targetURL = url.toString();
          }

          window.history.pushState(null, '', targetURL);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <Suspense>
      <Header />
      <main>
        <HeroSection />
        <AboutProject />
        <Visualization />
        <AccumulatedMoney />
        <InvestorsBlock people={people} companies={companies} />
        <JoinUs people={people} companies={companies} />
        <CoFounders />
        <ScrollToTopButton />
      </main>
      <Footer />
      <ModalsManager activeSection={activeSection} />
    </Suspense>
  );
};

export default HomePage;
