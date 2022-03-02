import Images from './CardImagesArray';
import theme from '../../theme/theme';
import { useState } from 'react';




export const useCardsCollection = () => {
  const [cards, setCards] = useState(Images);

  const updateForegroundTheme = () => {
    const foregroundColors = Object.values(theme.fg);
    const arrayLength = foregroundColors.length;
    let index = 0;

    const styledCards = Images.map(imageItem => {
      imageItem.fgColor = foregroundColors[index];
      (index < arrayLength - 1) ? index++ : index = 0;
      return imageItem;
    })
    setCards(prevCards => ({
      ...prevCards,
      styledCards
    }));
  }

  const updateBackgroundTheme = () => {
    const backgroundColors = Object.values(theme.bg);
    const arrayLength = backgroundColors.length;
    let index = 0;

    const styledCards = Images.map(imageItem => {
      imageItem.bgColor = backgroundColors[index];
      (index < arrayLength - 1) ? index++ : index = 0;
      return imageItem;
    })
    setCards(prevCards => ({
      ...prevCards,
      styledCards
    }));
  }
  return [cards, updateForegroundTheme, updateBackgroundTheme];
}
