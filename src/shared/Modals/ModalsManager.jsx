import Modal from 'react-modal';
import { useModal } from '/src/contexts/ModalHook';

import JoinModal from './JoinModal/JoinModal';
import BookEvent from './BookEvent/BookEvent';
import BurgerMenu from './MenuModal/BurgerMenu';
import DevelopersModal from './DevelopersModal/DevelopersModal';

Modal.setAppElement('#root');

const ModalsManager = (props) => {
  const controlsModal = useModal();

  return (
    <>
      <JoinModal controlsModal={controlsModal} />
      <BookEvent controlsModal={controlsModal} />
      <BurgerMenu controlsMenuModal={{ ...controlsModal, ...props }} />
      <DevelopersModal controlsModal={controlsModal} />
    </>
  );
};

export default ModalsManager;
