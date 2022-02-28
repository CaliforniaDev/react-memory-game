import { useState } from 'react';
import Gameboard from "./components/Gameboard/Gameboard";
import GameHeader from "./components/GameHeader/Header";

function App() {
  const handleCardClicked = (id) => {
    console.log(`${id} Card Clicked`);
  }
  return (
    <>
    <GameHeader />
    <Gameboard
      handleCardClickedProp={handleCardClicked} 
    />
    </>
      
  );
}


export default App;
