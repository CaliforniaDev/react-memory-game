import { useState } from 'react';

export const useCardsClicked = () => {
  const [cardsClicked, setCardsClicked] = useState([]);

  const checkCardsClicked = (id) => {
    return cardsClicked.includes(id); 
  }

  const updateCardsClicked = (id) => {
    setCardsClicked(prevState => ([
      ...prevState, id
    ]));
  }
  const resetCardsClicked = () => {
    setCardsClicked([])
  }
  
  return [cardsClicked, checkCardsClicked, updateCardsClicked, resetCardsClicked];
}