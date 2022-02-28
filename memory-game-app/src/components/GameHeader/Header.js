import styled from 'styled-components';
import Scoreboard from './Scoreboard';

const GameHeader = () => {
  return (
    <HeaderSection>
      <h1>Memory Game</h1>
      <Scoreboard />
    </HeaderSection>
  );
}
export default GameHeader;

const HeaderSection = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 8rem;
  background: #3B8C47;
`
