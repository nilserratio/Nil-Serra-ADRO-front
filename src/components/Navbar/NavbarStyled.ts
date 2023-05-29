import styled from "styled-components";

const NavBarStyled = styled.div`
  font-family: ${(props) => props.theme.fonts.primary};
  color: ${(props) => props.theme.colors.secondary};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 16px;
`;
export default NavBarStyled;
