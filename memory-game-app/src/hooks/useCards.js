import { useState, useEffect } from 'react';
import CardsCollection from '../lib/CardsCollection';


export const useCards = () => {
  const [cards, setCards] = useState(null);

  const updateCards = (theme) => {
    const newCards = CardsCollection.retrieveCardItems(theme);
    setCards(newCards);
  }
  return [cards, updateCards];
}