import defaultPersonImage from 'src/assets/investors/noname.jpg';
import defaultCompanyImage from 'src/assets/investors/default-img.png';
import Iconsvg from '../../../components/Icon/Icon';


import CloseButton from '../CloseButton/CloseButton';
import { InvestorModalStyled, InvestorModalWrapperStyled } from './InvestorModal.styled';

/**
 * InvestorModal component displays a modal with investor information.
 * 
 * @param {Object} props - The properties object.
 * @param {boolean} props.isOpen - Determines if the modal is open.
 * @param {Object} props.data - The data object containing investor information.
 * @param {string} props.data.name - The name of the company or person.
 * @param {string} props.data.logoURL - The URL of the company logo.
 * @param {string} props.data.link - The link to the company's or person's social media.
 * @param {string} props.data.question - The question related to the investor.
 * @param {string} props.data.answer - The answer related to the investor.
 * @param {string} props.data.firstName - The first name of the person (if variant is 'person').
 * @param {string} props.data.secondName - The second name of the person (if variant is 'person').
 * @param {string} props.data.type - The type of the person (if variant is 'person').
 * @param {string} props.data.imageURL - The URL of the person's image (if variant is 'person').
 * @param {string} props.data.facebook - The Facebook link of the person (if variant is 'person').
 * @param {string} props.data.instagram - The Instagram link of the person (if variant is 'person').
 * @param {function} props.onClose - The function to call when the modal is closed.
 * @param {'person'|'company'} props.variant - The variant of the modal, either 'company' or 'person'.
 * 
 * @returns {JSX.Element|null} The InvestorModal component.
 */
const InvestorModal = ({ isOpen, data, onClose, variant }) => {
  const { question, answer } = data;

  let type = 'КОМПАНІЯ';
  let imageURL = data.logoURL;
  let name = data.name;
  let defaultImage = defaultCompanyImage;
  let link = data.link;
  let linkType = "icon-instagram";

  if (variant === 'person') {
    imageURL = data.imageURL;
    name = `${data.firstName} ${data.secondName}`;
    type = data.type;
    defaultImage = defaultPersonImage;

    if (data.facebook) {
      link = data.facebook;
      linkType = "icon-faceb";
    } else {
      link = data.instagram;
      linkType = "icon-instagram";

    }
  }

  if (!isOpen) return null;

  return (
    <InvestorModalStyled
      onRequestClose={onClose}
      isOpen={isOpen}
      style={{ overlay: { zIndex: '2' } }}
      onClose={onClose}
      shouldCloseOnOverlayClick={true}
      contentLabel="Image Modal"
    >
      <InvestorModalWrapperStyled>
        <header className="modal_header">
          <CloseButton onClose={onClose} />
        </header>
        <article className="modal_content">
          <div className="investor_info_block">
            <div className="picture_wrapper">
              <img
                className="investor_picture"
                src={imageURL || defaultImage}
                alt={name}
                loading="lazy"
              />
              {link && (
                <a className="investor_link" href={link} target="_blank" rel="noopener noreferrer">
                  <Iconsvg iconName={linkType} styles="investor_link_icon" />
                </a>
              )}
            </div>
            <div className="details_wrapper">
              <p className="details_name">{name}</p>
              <p className="details_description">{type}</p>
            </div>
          </div>
          <p className="question_header">{question}</p>
          <p className="question_answer">{answer}</p>
        </article>
      </InvestorModalWrapperStyled>
    </InvestorModalStyled>
  );
};

export default InvestorModal;
