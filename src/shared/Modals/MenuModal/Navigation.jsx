import { Link } from 'react-router-dom';
import Iconsvg from '../../../components/Icon/Icon';
import { StyledNavList } from './Navigation.styled';
import links from '../../../constants/links_menu.json';

const Navigation = ({ activeSection, closeModal }) => {
  const onNavigationClick = (link, isActiveLink) => {
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
    const isOuterLink = typeof link.to === 'string';
    const isActiveLink = activeSection === link.id;

    return (
      <li className="navigation_list_item" key={link.value}>
        <Link
          onClick={isOuterLink ? undefined : () => onNavigationClick(link, isActiveLink)}
          to={link.to}
          className="navigation_link"
          data-active={isActiveLink}
        >
          <span className="navigation_link_text" >{link.value}</span>
          <Iconsvg styles="navigation_link_icon" iconName="hoverarrow" />
        </Link>
      </li>
    );
  }

  return (
    <StyledNavList>
      <ul className="navigation_list">
        {links.map(renderNavigationLink)}
      </ul>
    </StyledNavList>
  );
};

export default Navigation;
