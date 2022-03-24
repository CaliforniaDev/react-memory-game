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

  useEffect(() => {
    let timer = setTimeout(() => setIsLoading(false), 2000);
    console.log(`Loading: ${isLoading}`);
    return () => {
      clearTimeout(timer);
    };
  }, [isLoading]);

  const startLevel = async () => {
    await updateCards(level.cardCount, theme);
    //setIsLoading(false);
  };

  function handleCorrectClick(id) {
    updateCardsClicked(id);
    updateScore(1);
    shuffleCards();
  }
  function handleNextLevel() {
    nextLevel();
    resetCardsClicked();
  }
  function startNewGame() {
    setIsLoading(true);
    setIsGameOver(false);
    resetCardsClicked();
    resetScore();
    resetLevel();
  }

  function handleCardsClicked(id) {
    if (!checkCardsClicked(id)) handleCorrectClick(id);
    if (checkCardsClicked(id)) setIsGameOver(true);
    if (isAllCardsClicked(level.cardCount)) handleNextLevel();
  }

  return [
    isLoading,
    cards,
    score,
    bestScore,
    level,
    startLevel,
    startNewGame,
    isGameOver,
    handleCardsClicked,
  ];
};
