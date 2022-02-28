import styled from 'styled-components';

const GameHeader = () => {
  return (
    <HeaderWrapper>
      <h1>Memory Game</h1>
    </HeaderWrapper>
  );
}
export default GameHeader;

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 8rem;
  background: #3B8C47;
`
