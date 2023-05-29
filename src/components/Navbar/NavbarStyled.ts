import styled from "styled-components";

const NavbarStyled = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 16px;

  .navbar-container {
    &__link {
      font-family: ${(props) => props.theme.fonts.primary};
      color: ${(props) => props.theme.colors.secondary};
    }
  }
`;

export default NavbarStyled;
