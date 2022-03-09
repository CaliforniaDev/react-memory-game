import styled from 'styled-components';
import CardItem from './Card/CardItem';

const Gameboard = ({
  handleCardClickedProp,
  cards
}) => {
  return (
    <MainContainer>
      <BoardWrapper>
        {cards && cards.map(card => {
          return (
            <CardItem
              imageSrc={card.src}
              title={card.name}
              key={card.id}
              id={card.id}
              fg={card.fgColor}
              bg={card.bgColor}
              onClick={handleCardClickedProp}
              draggable="false"
            />
          )
        })}
      </BoardWrapper>
    </MainContainer>
  );
}

export default Gameboard;

const MainContainer = styled.main`
  display: flex;
  justify-content: center;
  padding: 2.4rem;
  flex-wrap: wrap;
  background: #403B31;
  width: 100vw;
  height: 100%;
`
const BoardWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 3.2rem;
  transition: all 200ms;
  width: 1200px;
  min-width: 600px;
  margin: auto;


`

  // &:after {
  //   width: 1200px;
  //   min-width: 600px;
  //   content: "";
  //   flex: auto;
  // }