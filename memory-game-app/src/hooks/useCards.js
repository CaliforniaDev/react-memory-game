import { useState } from "react";
import CardsCollection from "../lib/CardsCollection";

export const useCards = () => {
  const [cards, setCards] = useState(null);

  const shuffleCards = () => {
    setCards((prevCards) => CardsCollection.cardShuffler(prevCards));
  };

  const updateCards = async (quantity, theme) => {
    const newCards = await CardsCollection.retrieveCardItems(quantity, theme);
    setCards(newCards);
  };
  return [cards, updateCards, shuffleCards];
};
