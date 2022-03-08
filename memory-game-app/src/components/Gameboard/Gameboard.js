import React, { useState } from 'react';
import styled from 'styled-components';
import CardItem from './Card/CardItem';
import CardGrid from './Card/CardGrid';

const Gameboard = ({
  handleCardClickedProp,
  cards
}) => {
  const [level, setLevel] = useState(1);
  
  return (
    <MainContainer>
      {cards && cards.map(card => {
        console.log(card.bg);
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
      {/* <CardGrid handleCardClickedProp={handleCardClickedProp} /> */}
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