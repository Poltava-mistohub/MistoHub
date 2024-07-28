import ReactDOMServer from 'react-dom/server';
import { HeroPicture } from '../src/components/HeroSection/HeroPicture';
import { heroData } from '../src/constants/dataHeroSwiper';

export function render() {
  return ReactDOMServer.renderToString(
    <HeroPicture item={heroData[0]} priority hidden />
  );
}