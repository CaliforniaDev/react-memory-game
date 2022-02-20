import React, { useState } from 'react';
import styled from 'styled-components';
import Card from './Card';

const Gameboard = () => {
  const [level, setLevel] = useState(1);
  
  return (
    <MainContainer>
      <Card />
    </MainContainer>
  );
}

export default Gameboard;

const MainContainer = styled.main`
  display: flex;
  padding: 2.4rem;
  flex-wrap: wrap;
  background: #403B31;
  width: 100vw;
  height: 100vh;
`