import styled from 'styled-components';
import Scoreboard from './Scoreboard';

const GameHeader = ({ score, bestScore }) => {
  return (
    <HeaderSection>
      <h1>Memory Game</h1>
      <Scoreboard score={score} bestScore={bestScore} />
    </HeaderSection>
  );
}
export default GameHeader;

const HeaderSection = styled.header`
  display: flex;
  z-index: 100;
  position: fixed;
  align-items: center;
  flex-direction: column;
  width: 100%;
  min-height: 8rem;
  max-height: 16rem;
  opacity: 0.6;
  background: #3B8C47;
`
