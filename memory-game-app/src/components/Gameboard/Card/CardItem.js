import styled, { css, keyframes } from "styled-components";
import { useState, useEffect } from "react";
const CardItem = ({ id, bg, fg, title, imageSrc, onClick }) => {
  const [toAnimate, setToAnimate] = useState();
  useEffect(() => {
    setToAnimate(true);
    const animationTimeout = setTimeout(() => {
      setToAnimate(true);
    }, 400);

    return () => {
      clearTimeout(animationTimeout);
    };
  }, [toAnimate]);

  return (
    <CardContainer onClick={() => onClick(id)} animation={toAnimate} bg={bg}>
      <ImageWrapper fg={fg}>
        <img src={imageSrc} alt={title} />
      </ImageWrapper>
      {/* <h4>{title}</h4> */}
    </CardContainer>
  );
};

export default CardItem;

const appear = keyframes`
  0% {
    transform: scale(0);
  }

  100% {
    transform: scale(1);
  }
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 14rem;
  align-items: center;
  justify-content: center;
  height: 16rem;
  border-radius: 0.8rem;
  background: ${({ bg }) => bg};
  color: #fff;
  overflow: hidden;
  transition: 200ms;
  cursor: pointer;
  &:hover {
    transform: scale(1.05);
  }

  ${({ animation }) => {
    animation &&
      css`
        animation: ${appear} 400ms 1s;
      `;
  }}
`;
const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.6rem;
  background-color: ${({ fg }) => fg};
  border-radius: 0.8rem;
  height: 20rem;
  width: 100%;

  img {
    width: 100%;
    height: 100%;
    border: 1px soild red;
  }
`;
// /* Color Theme Swatches in Hex */
// .Wuling---Year-of-the-Ox-1-hex { color: #038C3E; }
// .Wuling---Year-of-the-Ox-2-hex { color: #04BF45; }
// .Wuling---Year-of-the-Ox-3-hex { color: #F2B807; }
// .Wuling---Year-of-the-Ox-4-hex { color: #F29727; }
// .Wuling---Year-of-the-Ox-5-hex { color: #F24C27; }

// /* Color Theme Swatches in RGBA */
// .Wuling---Year-of-the-Ox-1-rgba { color: rgba(2, 140, 62, 1); }
// .Wuling---Year-of-the-Ox-2-rgba { color: rgba(3, 191, 69, 1); }
// .Wuling---Year-of-the-Ox-3-rgba { color: rgba(242, 183, 7, 1); }
// .Wuling---Year-of-the-Ox-4-rgba { color: rgba(242, 150, 38, 1); }
// .Wuling---Year-of-the-Ox-5-rgba { color: rgba(242, 76, 38, 1); }

// /* Color Theme Swatches in HSLA */
// .Wuling---Year-of-the-Ox-1-hsla { color: hsla(146, 96, 28, 1); }
// .Wuling---Year-of-the-Ox-2-hsla { color: hsla(140, 96, 38, 1); }
// .Wuling---Year-of-the-Ox-3-hsla { color: hsla(45, 94, 48, 1); }
// .Wuling---Year-of-the-Ox-4-hsla { color: hsla(33, 88, 55, 1); }
// .Wuling---Year-of-the-Ox-5-hsla { color: hsla(11, 88, 55, 1); }

// ${({ theme }) => {
//   const { orange, yellow, green } = theme.bg;
//   let imageCounter = 0;
//   let j = 0;
//   const colors = [orange, yellow, green]
//   let colorItem = [];
//   for (let i = 0; i < Images.length; i++) {
//     while(j < colors.length) {
//       colorItem.push(colors[j]);
//       j++
//     }
//     console.log(colorItem);
//     console.log(imageCounter);
//   }
//  // let item = items[Math.floor(Math.random() * items.length)]
// }}
