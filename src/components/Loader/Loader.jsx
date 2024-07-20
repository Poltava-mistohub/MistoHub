import { LoaderContainer, Text } from './Loader.styled';
import Iconsvg from '../Icon/Icon';

const Loader = () => {
  return (
    <LoaderContainer>
      <Iconsvg width="30%" height="16%" iconName="house" styles="house-svg" />
      <Text>МІСТОХАБ</Text>
      <Iconsvg width="37%" height="20%" iconName="wave" styles="wave-svg" />
    </LoaderContainer>
  );
};
export default Loader;
