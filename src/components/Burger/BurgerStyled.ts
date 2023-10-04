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

  .navbar-container_burger-button--open {
    &div {
      transform-origin: 1px;
      :first-child {
        transform: rotate(45deg);
      }
      :nth-child(2) {
        opacity: 0;
        transform: translateX(20px);
      }
      :nth-child(3) {
        transform: rotate(-45deg);
      }
    }
  }
`;

export default BurgerStyled;
