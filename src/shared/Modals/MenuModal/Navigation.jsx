import { Link, useLocation } from 'react-router-dom';
import Iconsvg from '../../../components/Icon/Icon';
import { StyledNavList, StyledItem } from './Navigation.styled';
import links from '../../../constants/links_menu.json';

const Navigation = ({ activeSection, closeModal }) => {
  const location = useLocation();
  const onNavigationClick = (link, isAnchorLink, isActiveLink) => {
    // if (!isAnchorLink) {
    //   return;
    // }

    closeModal('menu_modal');

    if (isActiveLink) {
      return;
    }

    const sectionElement = document.getElementById(link.id);

    if (sectionElement) {
      window.scrollTo({
        top: sectionElement.offsetTop - 100,
        behavior: 'smooth',
      });
    }
  };

  const renderNavigationLink = (link) => {
    const isAnchorLink = link.to.pathname === location.pathname;
    const isActiveLink = activeSection === link.id;

    return (
      <StyledItem key={link.value}>
        <Link
          onClick={() => onNavigationClick(link, isAnchorLink, isActiveLink)}
          to={link.to}
          className={isActiveLink ? 'active' : 'link'}
        >
          {link.value} <Iconsvg iconName="hoverarrow" />
        </Link>
      </StyledItem>
    );
  }

  return (
    <StyledNavList>
      {links.map(renderNavigationLink)}
    </StyledNavList>
  );
};

export default Navigation;
