import { useState } from 'react';

export const useScore = () => {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  const resetScore = () => {
    return setScore(0);
  }

  const updateScore = (points) => {
    setScore(prevScore => {
      const score = prevScore + points;
      if (score > prevScore) return setBestScore(score);

      return score;
    })
  }
  return [score, bestScore, resetScore, updateScore];
}