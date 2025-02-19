import { Link } from 'react-router-dom';

import Icon from '../../components/Icon/Icon';
import { SocialWrapper, Separator } from './SocialBlock.styled';

function SocialBlock({ darkStyle, sectionName }) {
  let sections = {};
  switch (sectionName) {
    case 'header':
      sections[sectionName] = true;
      break;
    case 'footer':
      sections[sectionName] = true;
      break;
    case 'menu':
      sections[sectionName] = true;
      break;
  }

  return (
    <SocialWrapper $sections={sections}>
      <Link
        className={`link-menu ${sections.header ? darkStyle : ''}`}
        to="https://expz.menu/09ec2271-fec7-432a-8e9a-7fcb24247c3f"
        aria-label="go to the menu"
      >
        <Icon width="18" height="18" iconName="icon-menu" styles={darkStyle} />
      </Link>
      <Separator $sections={sections} className={sections.header ? darkStyle : ''} />
      <Link
        className={`link-instagram ${sections.header ? darkStyle : ''}`}
        to="https://www.instagram.com/mistohub"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="go and view the Mistohub Instagram account"
      >
        <Icon
          width="20"
          height="20"
          iconName="icon-instagram"
          styles={darkStyle}
        />
      </Link>
      <Link
        className={`link-facebook ${sections.header ? darkStyle : ''}`}
        to="https://www.facebook.com/mistohub/?locale=uk_UA"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="go to the Mistohub Facebook page"
      >
        <Icon width="20" height="20" iconName="icon-faceb" styles={darkStyle} />
      </Link>
    </SocialWrapper>
  );
}

export default SocialBlock;
