import { useState, useEffect } from "react";
import { useCards } from "./useCards";
import { useCardsClicked } from "./useCardsClicked";
import { useLevel } from "./useLevel";
import { useScore } from "./useScore";

export const useGame = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isGameOver, setIsGameOver] = useState(false);


  return [isLoading];
};
