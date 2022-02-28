import styled from 'styled-components';

const GameHeader = () => {
  return (
    <HeaderSection>
      <h1>Memory Game</h1>
    </HeaderSection>
  );
}
export default GameHeader;

const HeaderSection = styled.section`
  display: flex;
  justify-content: center;
  height: 8rem;
  background: #3B8C47;
`
