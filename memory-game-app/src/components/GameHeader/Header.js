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
  position: fixed;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 8rem;
  background: #3B8C47;
`
