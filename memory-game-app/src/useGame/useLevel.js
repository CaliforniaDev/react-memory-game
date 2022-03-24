import { useState } from "react";

export const useLevel = () => {
  const CARD_ADDEND = 2,
    MAX_CARDS = 12;
  const INITIAL_STATE = { cardCount: 4, currentLevel: 1 };
  const [level, setLevel] = useState(INITIAL_STATE);

  const nextLevel = () => {
    setLevel((prevState) => {
      let cardCount =
        prevState.cardCount < MAX_CARDS
          ? prevState.cardCount + CARD_ADDEND
          : MAX_CARDS;
      let currentLevel = prevState.currentLevel + 1;

      return { cardCount, currentLevel };
    });
  };

  const resetLevel = () => {
    setLevel({ ...INITIAL_STATE });
  };
  return [level, nextLevel, resetLevel];
};
