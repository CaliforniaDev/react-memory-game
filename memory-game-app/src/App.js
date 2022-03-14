import { useEffect } from 'react';
import theme from './theme/theme';
import { useScore } from './hooks/useScore'
import { useCards } from './hooks/useCards';
import { useCardsClicked } from './hooks/useCardsClicked';
import Gameboard from "./components/Gameboard/Gameboard";
import GameHeader from "./components/GameHeader/Header";

function App() {
  const [
    score,
    bestScore,
    resetScore,
    updateScore] = useScore();
  const [
    checkCardsClicked,
    updateCardsClicked,
    resetCardsClicked] = useCardsClicked();
  const [
    cards,
    updateCards,
    shuffleCards] = useCards();

  useEffect(() => {
    updateCards(theme);
  }, [cards]) // eslint-disable-line react-hooks/exhaustive-deps


  const handleCardClicked = (id) => {
    if (checkCardsClicked(id)) {
      resetCardsClicked();
      return resetScore();
    }
    shuffleCards();
    updateScore(1);
    return updateCardsClicked(id);
  }


  return (
    <>
      <GameHeader score={score} bestScore={bestScore} />
      <Gameboard
        cards={cards}
        handleCardClickedProp={handleCardClicked}
      />
    </>

  );
}


export default App;
