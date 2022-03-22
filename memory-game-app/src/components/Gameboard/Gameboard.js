import styled from "styled-components";
import CardItem from "./Card/CardItem";

const Gameboard = ({ handleCardClickedProp, cards }) => {
  return (
    <MainContainer>
      <BoardWrapper>
        {cards &&
          cards.map((card) => {
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
            );
          })}
      </BoardWrapper>
    </MainContainer>
  );
};

export default Gameboard;

const MainContainer = styled.main`
  display: flex;
  justify-content: center;
  padding: 16rem 2.4rem;
  flex-wrap: wrap;
  background: ${({ theme }) => theme.gameboard};
  width: 100vw;
  height: 100%;
`;
const BoardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  grid-gap: 3.2rem; 
  justify-content: center;
  width: 100%;
`;
