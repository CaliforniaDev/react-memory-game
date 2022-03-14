import styled from 'styled-components';
import Scoreboard from './Scoreboard';
import { useState, useEffect } from 'react';

const GameHeader = ({ score, bestScore }) => {
  const [scrollY, setScrollY] = useState(0);
  const [isActive, setActive] = useState(false);

  useEffect(() => {
    function watchScroll() {
      window.addEventListener("scroll", changeOpacity);
    }
    watchScroll();
    return () => {
      window.removeEventListener("scroll", changeOpacity);
    }
  })
  function changeOpacity() {
    setScrollY(window.pageYOffset);
    if (scrollY > 10) return setActive(true);
    if (scrollY < 10 ) return setActive(false);
  }
  return (
    <HeaderSection active={isActive}>
      <h1>Memory Game</h1>
      <Scoreboard score={score} bestScore={bestScore} />
    </HeaderSection>
  );
}
export default GameHeader;

const HeaderSection = styled.header`
  display: flex;
  z-index: 100;
  position: fixed;
  align-items: flex-start;
  flex-direction: column;
  width: 100%;
  min-height: 8rem;
  max-height: 16rem;
  padding-left: 56px;
  background: ${({ theme }) => theme.header};
  color: ${({ theme }) => theme.lightFont};
  box-shadow: 0px 1px 10px #333;
  border-radius: 2px;
  transition: 0.4s;
  opacity: ${({ active }) => active ? 0.75 : 1};
`
