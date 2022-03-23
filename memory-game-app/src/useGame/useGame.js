import theme from "../theme/theme";
import { useState, useEffect } from "react";
import { useCards } from "./useCards";
import { useCardsClicked } from "./useCardsClicked";
import { useLevel } from "./useLevel";
import { useScore } from "./useScore";

export const useGame = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isGameOver, setIsGameOver] = useState(false);

  const [score, bestScore, resetScore, updateScore] = useScore();
  const [cards, updateCards, shuffleCards] = useCards();
  const [level, nextLevel, resetLevel] = useLevel();
  const [
    checkCardsClicked,
    updateCardsClicked,
    isAllCardsClicked,
    resetCardsClicked,
  ] = useCardsClicked();

  const startLevel = async () => {
    await updateCards(level.cardCount, theme);
  };

  function handleCorrectClick(id) {
    console.log("correctClick");
    updateCardsClicked(id);
    updateScore(1);
    shuffleCards();
    return;
  }
  function handleNextLevel() {
    nextLevel();
    resetCardsClicked();
    shuffleCards();
    return;
  }
  function handleGameOver() {
    console.log("gameOver");
    resetScore();
    resetCardsClicked();
    resetLevel();
    shuffleCards();
    return;
  }

  function handleCardsClicked(id) {
    !checkCardsClicked(id) ? handleCorrectClick(id) : handleGameOver();
    if (isAllCardsClicked(level.cardCount)) return handleNextLevel();
  }

  return [
    isLoading,
    cards,
    score,
    bestScore,
    level,
    startLevel,
    handleCardsClicked,
  ];
};
