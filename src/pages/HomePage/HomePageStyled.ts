import styled from "styled-components";

const HomePageStyled = styled.main`
  background-color: ${(props) => props.theme.colors.primaryBackground};
  padding: 32px 22px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  width: 100%;
  min-width: 374px;

  .home-container {
    &__tittle {
      max-width: 276px;
      display: flex;
      flex-direction: column;
      gap: 16px;
      font-weight: 600;
      font-size: 2rem;
      line-height: 48px;
    }
  }
`;

export default HomePageStyled;
