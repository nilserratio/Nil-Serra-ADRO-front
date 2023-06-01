import styled from "styled-components";

const NavbarStyled = styled.nav`
  display: flex;
  gap: 20px;
  align-items: center;

  .navbar-container {
    &__link {
      font-family: ${(props) => props.theme.fonts.primary};
      color: ${(props) => props.theme.colors.secondary};
      font-size: 0.9rem;
      font-weight: bold;

      &.active {
        text-decoration: underline;
      }
    }
  }
`;

export default NavbarStyled;
