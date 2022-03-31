import styled from "styled-components";
import Button from "../../utils/Button";


const GameOver = ({ score, bestScore, startNewGameClicked, show }) => {
  return (
    show && (
      <GameOverModal>
        <h1>Game Over</h1>
        <p>Great Job! Your Score is: {score} </p>
        <p>Highscore: {bestScore}</p>
        <Button title="New Game" onClick={startNewGameClicked} />
      </GameOverModal>
    )
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
  background: ${({theme}) => theme.header};
  z-index: 2000;
  color: ${({theme}) => theme.lightFont};
  padding-bottom: 100px;

  p {
    font-size: 2.4rem;
  }
  
`;



export default GameOver;
