import { useState, useEffect } from 'react';
import CardItem from '../components/CardItem';
import theme from '../theme/theme';


const useSetCards = (images) => {
  const [cards, setCards] = useState(null);

  useEffect(() => {
    console.log('render');
    let counter = 0;
    const bgColors = Object.values(theme.bg);
    const fgColors = Object.values(theme.fg);
    const cardItems = images.map(image => {
      (counter < 2) ? counter++ : counter = 0; // <-- ITERATES TROUGH ARRAY OF COLORS
      return (
        <CardItem
          imageSrc={image.src}
          title={image.name}
          key={image.id}
          fg={fgColors[counter]}
          bg={bgColors[counter]}

        />
      );
    })
    setCards(cardItems);
  }, [images])
  return cards
}

export default useSetCards;