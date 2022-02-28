import { useState } from 'react';

export const useScore = () => {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  const resetScore = () => {
    return setScore(0);
  }

  const updateScore = (points) => {
    setScore(prevScore => {
      const newScore = prevScore + points;
      //console.log(score);
      if (newScore > bestScore) setBestScore(newScore);
      return newScore;
    })
  }
  return [score, bestScore, resetScore, updateScore];
}