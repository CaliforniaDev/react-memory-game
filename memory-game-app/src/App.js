import { useEffect } from "react";
import theme from "./theme/theme";
import { useScore } from "./hooks/useScore";
import { useCards } from "./hooks/useCards";
import { useCardsClicked } from "./hooks/useCardsClicked";
import { useLevel } from "./hooks/useLevel";
import { useGame } from "./hooks/useGame"
import Gameboard from "./components/Gameboard/Gameboard";
import GameHeader from "./components/GameHeader/Header";

function App() {
  const [score, bestScore, resetScore, updateScore] = useScore();

  const [
    checkCardsClicked,
    updateCardsClicked,
    isAllCardsClicked,
    resetCardsClicked,
  ] = useCardsClicked();

  const [cards, updateCards, shuffleCards] = useCards();

  const [level, nextLevel, resetLevel] = useLevel(score);

  const [isLoading] = useGame();
  console.log(isLoading);

  useEffect(() => {
    startLevel();
  }, [level]); // eslint-disable-line react-hooks/exhaustive-deps

  const startLevel = async () => {
    await updateCards(level.cardCount, theme);
  };
  const handleCardClicked = (id) => {
    if (!checkCardsClicked(id)) {
      updateCardsClicked(id);
      updateScore(1);

      if (isAllCardsClicked(level.cardCount)) {
        nextLevel();
        resetCardsClicked();
      } else {
        shuffleCards();
      }
    } else {
      resetScore();
      resetCardsClicked();
      resetLevel();
      shuffleCards();
    }
  };
  return (
    <>
      <GameHeader score={score} bestScore={bestScore} />
      <Gameboard cards={cards} handleCardClickedProp={handleCardClicked} />
    </>
  );
}

export default App;
