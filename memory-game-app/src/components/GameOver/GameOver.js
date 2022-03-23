import styled from "styled-components";

const GameOver = ({startNewGameClicked}) => {
  return (
    <GameOverModal>
      <h1>Game Over</h1>
      <Button onClick={startNewGameClicked}>New Game</Button>
    </GameOverModal>
  );
};

const GameOverModal = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  background: green;
  z-index: 2000;
  
`;

const Button = styled.div`
  padding: 1.2rem;
  padding: 2.4rem;
  cursor: pointer;
  background: white;
`;

export default GameOver;
