import { useState } from 'react';
import { useScore } from './hooks/useScore'
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
    cardsClicked,
    checkCardsClicked,
    updateCardsClicked,
    resetCardsClicked] = useCardsClicked()
  const array = []
  const check = () => {
  }
  const handleCardClicked = (id) => {
    if (checkCardsClicked(id)) {
      resetCardsClicked();
      return resetScore();
    }
    updateScore(1);
    console.log(score);
    return updateCardsClicked(id);
  }
  return (
    <>
      <GameHeader score={score} bestScore={bestScore}/>
      <Gameboard
        handleCardClickedProp={handleCardClicked}
      />
    </>

  );
}


export default App;
