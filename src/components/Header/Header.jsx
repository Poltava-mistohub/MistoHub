import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { useModal } from '../../contexts/ModalHook';

import { HeaderContainer, StyledHeader } from './Header.styled';
import SocialBlock from '/src/shared/SocialBlock/SocialBlock';
import Icon from '/src/components/Icon/Icon';
import { Link } from 'react-router-dom';

function Header() {
  const [darkStyle, setDarkStyle] = useState('');
  const { openModal } = useModal();

  const isMobile = useMediaQuery({ maxWidth: 767 });

  useEffect(() => {
    let footerEl = document.getElementById('footer');
    const hiddenEl = document.querySelector('.hidden-wrap');

    const handleScroll = () => {
      if (!footerEl) {
        footerEl = document.getElementById('footer');
      }

      if (window.scrollY !== 0 && footerEl?.offsetTop - 375 >= window.scrollY) {
        hiddenEl.classList.value.includes('hidden') &&
          hiddenEl.classList.remove('hidden');
        setDarkStyle('dark-header');
      } else if (window.scrollY === 0) {
        setDarkStyle('');
      } else {
        hiddenEl.classList.add('hidden');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <StyledHeader>
      <div className={`hidden-wrap ${darkStyle}`}>
        <HeaderContainer>
          <Link to="/">
            <Icon
              width={isMobile ? '99' : '118'}
              height={isMobile ? '34' : '40'}
              iconName="main-logo"
              styles={`main-logo ${darkStyle} `}
            />
          </Link>
          {isMobile ? (
            <>
              <button type="button" onClick={() => openModal('menu_modal')}>
                <Icon
                  width="44"
                  height="38"
                  iconName="burger-menu"
                  styles={`${darkStyle} burger-menu-icon`}
                />
              </button>
            </>
          ) : (
            <div className="menu-wrapper">
              <SocialBlock darkStyle={darkStyle} sectionName="header" />
              <Link
                to="/event_booking"
                className="btn-clouds"
              >
                <Icon
                  width="180"
                  height="85"
                  iconName="cloud"
                  styles={`${darkStyle} cloud-icon`}
                />
                <span>Забронювати івент</span>
              </Link>
              <button type="button" onClick={() => openModal('menu_modal')}>
                <Icon
                  width="54"
                  height="47"
                  iconName="burger-menu"
                  styles={`${darkStyle} burger-menu-icon`}
                />
              </button>
            </div>
          )}
        </HeaderContainer>
      </div>
    </StyledHeader>
  );
}

export default Header;
