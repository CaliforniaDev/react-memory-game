import { useState } from "react";

export const useCardsClicked = () => {
  const [cardsClicked, setCardsClicked] = useState([]);

  const checkCardsClicked = (id) => cardsClicked.includes(id);

  const updateCardsClicked = (id) => {
    setCardsClicked((prevState) => [...prevState, id]);
  };
  const isAllCardsClicked = (cardCount) =>
    cardsClicked.length === cardCount - 1;

  const resetCardsClicked = () => {
    return setCardsClicked([]);
  };

  return [
    checkCardsClicked,
    updateCardsClicked,
    isAllCardsClicked,
    resetCardsClicked,
  ];
};
