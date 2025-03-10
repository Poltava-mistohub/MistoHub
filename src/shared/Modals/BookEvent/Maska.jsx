import { MaskaStyled } from './BookEvent.styled';

import maska_png1 from '/src/assets/EventBooking/img/event_place.png';
import maska_png2 from 'src/assets/EventBooking/img/event_place@2.png';
import maska_webp1 from 'src/assets/EventBooking/img/event_place.webp';
import maska_webp2 from 'src/assets/EventBooking/img/event_place@2.webp';
import { HeroPicture } from '../../HeroPicture/HeroPicture';

const Maska = () => {
  return (
    <MaskaStyled>
      <HeroPicture
        item={{
          mobile: {
            png: maska_png1,
            png_2x: maska_png2,
            webp: maska_webp1,
            webp_2x: maska_webp2,
          },
          tablet: {
            png: maska_png1,
            png_2x: maska_png2,
            webp: maska_webp1,
            webp_2x: maska_webp2,
          },
          desktop: {
            png: maska_png1,
            png_2x: maska_png2,
            webp: maska_webp1,
            webp_2x: maska_webp2,
          },
          alt: 'Місце проведення',
        }}
        priority={true}
        hidden={false}
        imgClassName="joinImg"
      />
    </MaskaStyled>
  );
};

export default Maska;
