import ReactDOMServer from 'react-dom/server';
import { HeroPreload } from '../src/components/HeroSection/HeroPicture';
import { heroData } from '../src/constants/dataHeroSwiper';

export function render() {
  return ReactDOMServer.renderToString(
    <HeroPreload item={heroData[0]} priority hidden />
  );
}
