import React, { useState } from 'react';
import CardItem from './CardItem';
import Images from '../utils/CardImagesArray';
import styled from 'styled-components';
import theme from '../theme/theme';
import useCreateArray from '../hooks/useCreateArray';

const CardGrid = () => {
  const bgColors = useCreateArray(theme.bg);
  const fgColors = useCreateArray(theme.fg);
  let counter = 0;
  const cards = Images.map(image => {
    (counter < 2) ? counter++ : counter = 0; // <-- ITERATES TROUGH 
    return (
      <CardItem
        imageSrc={image.src}
        title={image.name}
        key={image.id}
        fg={fgColors[counter]}
        bg={bgColors[counter]}

      />
    );
  })
  return (
    <GridWrapper>
      {cards}
    </GridWrapper>
  );
}

export default CardGrid;

const GridWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 3.2rem;
`

{/**
  
 */}