import styled from "styled-components";

const NavbarStyled = styled.nav`
  display: flex;
  gap: 20px;

  .navbar-container {
    &__link > span {
      font-family: ${(props) => props.theme.fonts.primary};
      color: ${(props) => props.theme.colors.secondary};
      font-size: 0.9rem;
      font-weight: bold;
    }
  }
`;

export default NavbarStyled;
