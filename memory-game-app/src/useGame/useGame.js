import theme from "../theme/theme";
import { useState } from "react";
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
    setIsLoading(false);
    console.log(`Loading: ${isLoading}`);
  };

  function handleCorrectClick(id) {
    updateCardsClicked(id);
    updateScore(1);
    shuffleCards();
  }
  function handleNextLevel() {
    nextLevel();
    resetCardsClicked();
    shuffleCards();
  }
  function handleGameOver() {
    setIsGameOver(true);
    setIsLoading(false);
    resetScore();
    resetCardsClicked();
    resetLevel();
    shuffleCards();
    return;
  }
  function startNewGame() {
    setIsLoading(true);
    setIsGameOver(false);
    console.log(`Game Over: ${isGameOver}`);
    console.log(`Loading: ${isLoading}`)
  }

  function handleCardsClicked(id) {
    if (!checkCardsClicked(id)) handleCorrectClick(id);
    if (checkCardsClicked(id)) handleGameOver();
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
    handleCardsClicked,
  ];
};
