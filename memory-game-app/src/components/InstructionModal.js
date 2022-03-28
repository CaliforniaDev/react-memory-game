import styled from "styled-components";
import { deviceMaxWidth } from "./device";
const InstructionModal = ({ onClick, show }) => {
  return (
    show && (
      <ModalContainer onClick={onClick}>
        <p>Click each card once. </p>
        <p>If you choose the same card</p>
        <p>GAME OVER!</p>
        <p>Click anywhere to continue</p>
      </ModalContainer>
    )
  );
};

const ModalContainer = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  background: ${({ theme }) => theme.header};
  z-index: 2000;
  color: ${({ theme }) => theme.lightFont};
  padding-bottom: 100px;
  opacity: 0.95;
  text-align: center;
  padding: 0 2.4rem 8rem;
  cursor: pointer;
  

  p {
    white-space: nowrap;
    font-size: 2.4rem;
  }
  p:nth-child(4) {
    font-size: 1.6rem;
    padding-top: 1.6rem;
  }

  @media screen and ${deviceMaxWidth.mobileL} {
    p {
      font-size: 1.8rem;
    }
  } 
`;

export default InstructionModal;
