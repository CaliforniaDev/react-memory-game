import Images from './CardImagesArray';
import styled from 'styled-components';
import CardItem from './CardItem';
import theme from '../../../theme/theme'

const CardGrid = () => {



  const foregroundColors = Object.values(theme.fg);
  const backgroundColors = Object.values(theme.bg);
  const arraylength = backgroundColors.length - 1;
  let index = 0;

  return (
    <GridWrapper  >
        {Images.map(image => {
          (index < arraylength) ? index++ : index = 0;
          return (
            <CardItem
              imageSrc={image.src}
              title={image.name}
              key={image.id}
              fg={foregroundColors[index]}
              bg={backgroundColors[index]}
            />
          )
        })}
    </GridWrapper>
  );
}

export default CardGrid;



const GridWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 3.2rem;
  transition: all 200ms;
  width: 1200px;
  min-width: 600px;
  margin: auto;

  &:after {
    width: 1200px;
    min-width: 600px;
    content: "";
    flex: auto;
  }

`

