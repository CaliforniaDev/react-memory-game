import Images from '../utils/CardImagesArray';
import styled from 'styled-components';
import useSetCards from '../hooks/useSetCardsObject';

const CardGrid = () => {
  const cards = useSetCards(Images);

  return (
    <GridWrapper>
      {cards}
    </GridWrapper>
  );
}

export default CardGrid;

const GridWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 3.2rem;
`
