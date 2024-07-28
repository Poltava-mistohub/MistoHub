import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

export const ScrollOnLocationHash = () => {
  const location = useLocation();

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
}

export const ListenScroll = ({ setActiveSection }) => {
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

          if (
            `#${sectionId}` === window.location.hash ||
            (!sectionId && !window.location.hash)
          ) {
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
  }, [setActiveSection]);
}