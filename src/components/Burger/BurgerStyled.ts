import styled from "styled-components";

const BurgerStyled = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 2rem;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: ${(props) => props.theme.colors.secondary};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
  }
`;

export default BurgerStyled;
