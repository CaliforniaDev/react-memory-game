import imagesArray from './CardImagesArray';

const CARDS = imagesArray;


function updateForegroundTheme(theme) {
  const foregroundColors = Object.values(theme.fg);
  const arrayLength = foregroundColors.length;
  let index = 0;

  CARDS.map(cardItem => {
    cardItem.fgColor = foregroundColors[index];
    (index < arrayLength - 1) ? index++ : index = 0;
    return cardItem;
  })
  return CARDS;
}

function updateBackgroundTheme(theme) {
  const backgroundColors = Object.values(theme.bg);
    const arrayLength = backgroundColors.length;
    let index = 0;
    CARDS.map(cardItem => {
      cardItem.bgColor = backgroundColors[index];
      (index < arrayLength - 1) ? index++ : index = 0;
      return cardItem;
    })

    return CARDS;
}

const retrieveCardItems = (theme) => {
  updateBackgroundTheme(theme);
  updateForegroundTheme(theme);
  return CARDS;
}


const CardsCollection = {
  retrieveCardItems,
}

export {CardsCollection as default};