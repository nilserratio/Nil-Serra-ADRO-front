import styled from "styled-components";

const NavbarStyled = styled.nav`
  display: flex;

  .navbar-list {
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: ${(props) => props.theme.colors.secondaryBackground};
    height: 100vh;
    min-width: 374px;
    text-align: left;
    padding: 2rem;
    margin-top: 0;
    position: absolute;
    top: 0;
    left: 0;

    z-index: 1;

    @media (max-width: 576px) {
      width: 100%;
    }

    &__link {
      font-size: 2rem;
      text-transform: uppercase;
      padding: 2rem 0;
      font-weight: bold;
      letter-spacing: 0.5rem;
      color: ${(props) => props.theme.colors.tertiary};
      text-decoration: none;
      transition: color 0.3s linear;

      @media (max-width: 576px) {
        font-size: 1.5rem;
        text-align: center;
      }

      &:hover {
        color: ${(props) => props.theme.colors.primary};
      }

      &.active {
        text-decoration: underline;
        text-underline-offset: 1rem;
      }
    }
  }

  .navbar-toggle {
    position: fixed;
    height: 100vh;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 1;
  }

  .navbar-list--close {
    opacity: 0;
    visibility: hidden;
    transition: 250ms ease;
  }

  .navbar-list--open {
    opacity: 1;
    visibility: visible;
    transition: 250ms ease;
  }
`;

export default NavbarStyled;
