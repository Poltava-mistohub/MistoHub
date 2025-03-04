import styled from 'styled-components';


export const LoaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @keyframes fadeInUp {
    0% {
      opacity: 0;
      transform: translateY(100%);
    }
    50% {
      opacity: 0.5;
      transform: translateY(0);
    }
    100% {
      opacity: 0;
      transform: translateY(100%);
    }
  }

  .animate-me {
    width: 100px;
    max-width: 15vw;
    opacity: 0;
    color: rgb(11, 11, 11);
    transform: translateY(100%);
    animation: fadeInUp 1s ease-out infinite;
  }
`;
