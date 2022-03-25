import styled from "styled-components";
const InstructionModal = ({ onClick, show }) => {
  return (
    show && (
      <ModalContainer onClick={onClick}>
        <p>Click each card once. </p>
        <p>If you choose the same card GAME OVER!</p>
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
  padding: 0 2.4rem, 8rem;
  

  p {
    font-size: 2.4rem;
  }
  p:nth-child(3) {
    font-size: 1.6rem;
    padding-top: 1.6rem;
  }
`;

export default InstructionModal;
