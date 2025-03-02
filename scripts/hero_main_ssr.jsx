import ReactDOMServer from 'react-dom/server';
import { HeroPreload } from '../src/shared/HeroPicture/HeroPicture';
import { heroData } from '../src/constants/dataHeroSwiper';

export function render() {
  return ReactDOMServer.renderToString(
    <HeroPreload item={heroData[0]} />
  );
}
