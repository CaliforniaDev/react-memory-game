import { useEffect } from "react";
import styled from "styled-components";
import icon from "../../lib/assets/Cube-1s-200px.gif";

const LoadingScreen = ({ show }) => {
  return (
    show && (
      <LoadingContainer>
        <img src={icon} alt="Loading..." />
      </LoadingContainer>
    )
  );


};

export default LoadingScreen;

const LoadingContainer = styled.div`
min-width: 100vw;
min-height: 100vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
position: absolute;
background: green;
z-index: 2000;
`;