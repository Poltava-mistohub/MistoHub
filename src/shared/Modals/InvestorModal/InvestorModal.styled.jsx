import styled from 'styled-components';
import ReactModal from 'react-modal';

import bgImage from 'src/assets/investors/illustration_modal.svg';

export const InvestorModalStyled = styled(ReactModal)`
  &.ReactModal__Content {
    height: fit-content;
    margin: auto;
    border-radius: 10px;
    border: none;
    background-color: #fff;
    box-shadow:
      4px 17px 102.1px 0px rgba(0, 0, 0, 0.19),
      0px 25px 30.4px 0px rgba(0, 0, 0, 0.09);
    overflow: hidden;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: calc(100% - 60px);
    max-width: 350px;

    @media screen and (min-width: 768px) {
      max-width: 570px;
    }
  }
`;

export const InvestorModalWrapperStyled = styled.div`
  background-image: url(${bgImage});
  background-repeat: no-repeat;
  background-size: 60%;
  background-position: bottom right;

  .modal_header {
    display: flex;
    justify-content: end;
    padding: 10px;
  }

  .modal_content {
    padding: 0 30px 30px;
  }

  .investor_info_block {
    margin-bottom: 35px;
    display: flex;
    gap: 15px;
  }

  .picture_wrapper {
    position: relative;
  }

  .investor_link {
    background: #f77d07;
    width: 30px;
    height: 30px;
    border-radius: 100px;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 50%);
    display: flex;
    justify-content: center;
    align-items: center;

    @media (min-width: 768px) {
      width: 40px;
      height: 40px;
    }
  }

  .investor_link_icon {
    width: 50%;
    height: 50%;
    fill: white;
  }

  .investor_picture {
    width: 100px;
    height: 100px;
    object-fit: contain;

    @media (min-width: 768px) {
      width: 200px;
      height: 200px;
    }
  }

  .details_wrapper {
    width: calc(100 - 115px);

    @media (min-width: 768px) {
      width: calc(100 - 215px);
    }
  }

  .details_name {
    font-family: Oddval;
    font-weight: 600;
    letter-spacing: -0.02em;
    color: #0b0b0b;
    font-size: 20px;
    line-height: 130%;
  }

  .details_description {
    font-family: FixelDisplay;
    font-weight: 500;
    letter-spacing: -0.02em;
    color: rgba(11, 11, 11, 0.5);
    font-size: 14px;
  }

  .question_header {
    color: #0b0b0b;
    font-family: Oddval;
    font-weight: 600;
    letter-spacing: -0.02em;
    color: rgb(11, 11, 11);
    font-size: 20px;
    line-height: 130%;
  }



  .question_answer {
    color: #0b0b0b;
    font-size: 16px;
    line-height: 18px;
    padding-right: 30px;
  }

  @media only screen and (min-width: 768px) {

  }
`;
