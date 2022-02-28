import React, { useState } from 'react';
import styled from 'styled-components';
import CardGrid from './Card/CardGrid';

const Gameboard = ({
  handleCardClickedProp,
}) => {
  const [level, setLevel] = useState(1);
  
  return (
    <MainContainer>
      <CardGrid handleCardClickedProp={handleCardClickedProp} />
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