import styled from "styled-components";

const Scoreboard = () => {
  return(
    <ScoreContainer>
      <Score>Score: 0</Score>
      <BestScore>Best: 0</BestScore>
    </ScoreContainer>
  );
}



const ScoreContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Score = styled.p`
  font-size: 3.2rem;
`
const BestScore = styled.p`
  font-size: 3.2rem;
`

export default Scoreboard;