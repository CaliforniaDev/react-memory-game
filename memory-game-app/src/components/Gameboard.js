import styled from 'styled-components';
import Card from './Card';
const Gameboard = () => {
  return (
    <DivContainer>
      <Card />
    </DivContainer>
  );
}

export default Gameboard;

const DivContainer = styled.div`
  display: flex;
  background: #444;
  width: 100vw;
  height: 100vh;
`