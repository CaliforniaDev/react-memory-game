import styled, { css } from "styled-components";
const Button = ({ instructions, title, onClick }) => {
  return (
    <ButtonWrapper onClick={onClick} instructions={instructions}>
      {title}
    </ButtonWrapper>
  );
};

export default Button;

const ButtonWrapper = styled.div`
   {
    padding: 1.2rem 2.4rem;
    cursor: pointer;
    border-radius: 0.8rem;
    background: ${({ theme }) => theme.fg.green};
    margin-bottom: auto;
    font-size: 2.4rem;
    margin: 2.4rem 2.4rem;
    color: ${({ theme }) => theme.lightFont};
    border: 3px solid ${({ theme }) => theme.header};

    &:hover {
      color: white;
      background: ${({ theme }) => theme.hover};
    }

    ${(props) =>
      props.instructions &&
      css`
        bottom: 0;
        right: 0;
        position: absolute;
        font-size: 1.6rem;
      `}
  }
`;
