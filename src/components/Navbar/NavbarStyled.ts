import styled from "styled-components";

const NavbarStyled = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 16px;

  .navbar-container {
    &__link > p {
      font-family: ${(props) => props.theme.fonts.primary};
      color: ${(props) => props.theme.colors.secondary};
      font-size: 1rem;
    }
  }
`;

export default NavbarStyled;
