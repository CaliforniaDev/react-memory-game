import CardItem from './CardItem';
import Images from '../utils/CardImagesArray';
import styled from 'styled-components';

const CardGrid = () => {
  const cards = Images.map(image => {
    return (
      <CardItem
        imageSrc={image.src}
        title={image.name}
        key={image.id}
      />
    );
  })
  return (
    <GridWrapper>
      {cards}
    </GridWrapper>
  );
}

export default CardGrid;

const GridWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 3.2rem;
`