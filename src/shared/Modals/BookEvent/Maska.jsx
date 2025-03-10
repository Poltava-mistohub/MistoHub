import { MaskaStyled } from './BookEvent.styled';

import maska_png1 from '/src/assets/EventBooking/img/event_place.png';
import maska_png2 from 'src/assets/EventBooking/img/event_place@2.png';
import maska_webp1 from 'src/assets/EventBooking/img/event_place.webp';
import maska_webp2 from 'src/assets/EventBooking/img/event_place@2.png';

const Maska = () => {
  return (
    <MaskaStyled>
      <picture>
        <source
          className="joinImg"
          srcSet={`${maska_webp1} 1x, ${maska_webp2} 2x`}
          type="image/png"
        />
        <source
          className="joinImg"
          srcSet={`${maska_png1} 1x, ${maska_png2} 2x`}
          type="image/webp"
        />
        <img className="joinImg" src={maska_png1} alt="Maska" />
      </picture>
    </MaskaStyled>
  );
};

export default Maska;
