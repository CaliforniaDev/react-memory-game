import Gameboard from "./components/Gameboard";
import Header from "./components/Header/Header";
import Images from "./utils/CardImagesArray";
import styled from "styled-components";

function App() {
  console.log(Images[0].key)
  return (
    <>
    <Header />
    <Gameboard />
    <ImageDiv />
    </>
      
  );
}

const ImageDiv = styled.div`
background-image: url(${Images[4].key});
background-repeat: no-repeat;
height: 200px;
background-color: red ;


`


export default App;
