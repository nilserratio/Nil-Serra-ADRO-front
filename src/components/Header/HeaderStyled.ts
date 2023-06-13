import styled from "styled-components";

const HeaderStyled = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 8px 22px;
  min-width: 320px;
  background-color: ${(prop) => prop.theme.colors.primary};

  .header-container {
    &__anchor.active {
      height: 90px;
      width: 130px;
    }

    &__anchor {
      height: 90px;
      width: 130px;
    }
  }
`;

export default HeaderStyled;
