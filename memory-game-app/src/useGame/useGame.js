import theme from "../theme/theme";
import goodClickWav from "../lib/assets/sounds/goodClick.wav";
import gameOverWav from "../lib/assets/sounds/gameOver.wav";
import { useState, useEffect } from "react";
import { useCards } from "./useCards";
import { useCardsClicked } from "./useCardsClicked";
import { useLevel } from "./useLevel";
import { useScore } from "./useScore";

export const useGame = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isGameOver, setIsGameOver] = useState(false);
  const [showInstructions, setShowInstructions] = useState(false);

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

  useEffect(() => {
    let timer = setTimeout(() => setShowInstructions(true), 2001);
    return () => clearTimeout(timer);
  }, []);

  const goodClickAudio = new Audio(goodClickWav);
  const gameOverAudio = new Audio(gameOverWav);

  const startLevel = async () => {
    await updateCards(level.cardCount, theme);
    //setIsLoading(false);
  };

  function handleInstructions() {
    setShowInstructions(false);
    goodClickAudio.play()
    return;
  }

  function handleCorrectClick(id) {
    updateCardsClicked(id);
    updateScore(1);
    shuffleCards();
    goodClickAudio.play();
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
    goodClickAudio.play();
  }

  function handleCardsClicked(id) {
    if (!checkCardsClicked(id)) handleCorrectClick(id);
    if (checkCardsClicked(id)) {
      setIsGameOver(true);
      gameOverAudio.play();
    }
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
    showInstructions,
    handleInstructions,
  ];
};
