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

    &__link {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 8px 24px;
      width: 100%;
      max-width: 276px;
      border: solid;
      border-color: ${(props) => props.theme.colors.secondaryBackground};
      border-width: 1px;
      border-radius: 12px;
      background: ${(props) => props.theme.colors.primary};
    }

    &__feedback {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      gap: 20px;
      padding: 40px 20px;
      width: 100%;
      max-width: 276px;
      background-color: ${(props) => props.theme.colors.primary};
      border-radius: 10px;
      border: 1px solid rgb(217, 217, 217);
    }
  }
`;

export default HomePageStyled;
