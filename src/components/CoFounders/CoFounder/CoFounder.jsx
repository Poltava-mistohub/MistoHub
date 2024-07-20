import {
  SocialNetworkLink,
  ListItem,
  PersonDescription,
  PersonImage,
  PersonImageContainer,
  PersonName,
} from './CoFounder.styled';
import Iconsvg from '../../Icon/Icon';

const CoFounder = ({
  person: {
    webp,
    jpg,
    webpRetina,
    jpgRetina,
    webpMobile,
    jpgMobile,
    webpMobileRetina,
    jpgMobileRetina,
    instagram,
    facebook,
    name,
    description,
  },
}) => {
  return (
    <ListItem>
      <PersonImageContainer>
        <picture>
          <source
            srcSet={webpRetina}
            type="image/webp"
            media="(min-width: 768px) and  (min-resolution: 192dpi)"
            loading="lazy"
          />
          <source
            srcSet={jpgRetina}
            type="image/jpg"
            media="(min-width: 768px) and (min-resolution: 192dpi)"
            loading="lazy"
          />
          <source
            srcSet={webp}
            type="image/webp"
            media="(min-width: 768px)"
            loading="lazy"
          />
          <source
            srcSet={jpg}
            type="image/jpg"
            media="(min-width: 768px)"
            loading="lazy"
          />

          <source
            srcSet={webpMobileRetina}
            type="image/webp"
            media="(min-resolution: 192dpi)"
            loading="lazy"
          />
          <source
            srcSet={jpgMobileRetina}
            type="image/jpg"
            media="(min-resolution: 192dpi)"
            loading="lazy"
          />
          <source srcSet={webpMobile} type="image/webp" loading="lazy" />
          <source srcSet={jpgMobile} type="image/jpg" loading="lazy" />

          <PersonImage
            src={jpgMobile}
            alt="Co-Founder avatar."
            loading="lazy"
          />
        </picture>
        {instagram !== null ? (
          <SocialNetworkLink href={instagram} target="blank">
            <Iconsvg
              iconName="instagramIcon"
              styles="socialNetworkIcon"
            ></Iconsvg>
          </SocialNetworkLink>
        ) : (
          <SocialNetworkLink href={facebook} target="blank">
            <Iconsvg
              iconName="facebookIcon"
              styles="socialNetworkIcon"
            ></Iconsvg>
          </SocialNetworkLink>
        )}
      </PersonImageContainer>

      <PersonName>{name}</PersonName>
      <PersonDescription>{description}</PersonDescription>
    </ListItem>
  );
};

export default CoFounder;
