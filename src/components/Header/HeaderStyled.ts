import styled from "styled-components";

const HeaderStyled = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 12px 22px;
  min-width: 320px;
  background-color: ${(prop) => prop.theme.colors.primary};
`;

export default HeaderStyled;
