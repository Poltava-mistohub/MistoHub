import { useEffect, useState, lazy, Suspense } from 'react';
import { fetchCompanies, fetchPeople, fetchGoal, fetchPartners } from '../../services/API';

import Header from '/src/components/Header/Header';
import ScrollToTopButton from '../../components/ScrollToTopButton/ScrollToTopButton';
import HeroSection from '/src/components/HeroSection/HeroSection';
import AboutProject from '../../components/About/AboutProject';
import { ListenScroll, ScrollOnLocationHash } from './utils';

/**
 * Default lazy loading function does not give the thread a space to render.
 * This lazy wrapper request idle callback so we start to parse the module only when the main thread is idle.
 */
function realLazy(callback) {
  const delay = 'requestIdleCallback' in window ?
    (cb) => window.requestIdleCallback(cb, { timeout: 100 }) :
    (cb) => setTimeout(cb, 0);

  return lazy(() => new Promise(res => delay(res)).then(callback));
}

const CoFounders = realLazy(
  () => import('../../components/CoFounders/CoFounders')
);
const JoinUs = realLazy(
  () => import('../../components/JoinUs/JoinUs')
);
const Visualization = realLazy(
  () => import('/src/components/Visualization/Visualization.jsx')
);
const AccumulatedMoney = realLazy(
  () => import('/src/components/AccumulatedMoney/AccumulatedMoney.jsx')
);
const InvestorsBlock = realLazy(
  () => import('/src/components/InvestorsCompanies/InvestorsBlock.jsx')
);
const PartnersBlock = realLazy(
  () => import('/src/components/InvestorsCompanies/PartnersBlock.jsx')
);
const Footer = realLazy(
  () => import('/src/components/Footer/Footer.jsx')
);
const ModalsManager = realLazy(
  () => import('/src/shared/Modals/ModalsManager.jsx')
);

const HomePage = () => {
  const [goalData, setGoalData] = useState(null);
  const [activeSection, setActiveSection] = useState('main');
  const [companies, setCompanies] = useState([]);
  const [people, setPeople] = useState([]);
  const [partners, setPartners] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const [companiesData, peopleData, partnersData] = await Promise.all([
          fetchCompanies(),
          fetchPeople(),
          fetchPartners(),
        ]);
        setCompanies(companiesData);
        setPeople(peopleData);
        setPartners(partnersData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const goalResponse = await fetchGoal();
        setGoalData(goalResponse);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <AboutProject />
        <Suspense fallback={null}>
          <Visualization />
          <AccumulatedMoney goalData={goalData} />
          <InvestorsBlock people={people} companies={companies} />
          <PartnersBlock companies={partners} />
          <JoinUs people={people} companies={companies} goalData={goalData} />
          <CoFounders />
          <ScrollToTopButton />
          <ScrollOnLocationHash />
          <ListenScroll setActiveSection={setActiveSection} />
        </Suspense>
      </main>
      <>
        <Suspense fallback={null}>
          <Footer />
        </Suspense>
        <Suspense fallback={null}>
          <ModalsManager activeSection={activeSection} />
        </Suspense>
      </>
    </>
  );
};

export default HomePage;
