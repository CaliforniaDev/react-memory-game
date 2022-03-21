import imagesArray from "./CardImagesArray";

const CARDS = imagesArray,
  MAX = CARDS.length - 1;

function getRandomizedStart(quantity) {
  const index = Math.floor(Math.random() * (MAX - quantity)) + 1;
  return index;
}

function fetchCardItems(quantity) {
  const cards = [];
  const startIndex = getRandomizedStart(quantity);
  const endIndex = startIndex + quantity
  for (let i = startIndex; i < endIndex; i++) {
    cards.push(CARDS[i]);
  }
  return cards;
}

function retrieveForegroundTheme(cards, theme) {
  const foregroundColors = Object.values(theme.fg);
  const arrayLength = foregroundColors.length;
  let index = 0;
  Promise.all(
    cards.map((cardItem) => {
      cardItem.fgColor = foregroundColors[index];
      if (index <= arrayLength - 1) index++;
      if (index > arrayLength - 1) index = 0;
      return cardItem;
    })
  );
  return cards;
}
// const updateBackgroundTheme = async (cards, theme) => {
//   const backgroundColors = await Object.values(theme.bg);
//     const arrayLength = backgroundColors.length;
//     let index = 0;
//     Promise.all(cards.map(cardItem => {
//       cardItem.bgColor = backgroundColors[index];
//       console.log(`Index: ${index}`);
//       console.log(cardItem.bgColor);
//       (index < arrayLength - 1) ? index++ : index = 0;
//       return cardItem;
//     }));
//     return cards;
// }

function cardShuffler(cards) {
  const shuffled = cards.sort(() => Math.random() - 0.5);
  return shuffled;
}

const retrieveCardItems = (quantity, theme) => {
  const cards = fetchCardItems(quantity);
  const shuffledCards = cardShuffler(cards);
  retrieveForegroundTheme(cards, theme);
  return shuffledCards;
};

const CardsCollection = {
  retrieveCardItems,
  cardShuffler,
};

export { CardsCollection as default };
