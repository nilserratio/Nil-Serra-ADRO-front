import styled from "styled-components";

const AnimalDetailPageStyled = styled.main`
  background-color: ${(props) => props.theme.colors.primaryBackground};
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;

  .details-container {
    padding: 0 22px 32px 22px;
    display: flex;
    flex-direction: column;
    gap: 24px;

    &__tittle {
      font-size: 2rem;
    }

    &__info {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }

    &__info > span {
      padding: 8px 24px;
      background: ${(props) => props.theme.colors.primary};
      border-radius: 12px;
    }

    &__races {
      padding: 8px 24px;
      background: ${(props) => props.theme.colors.primary};
      border-radius: 12px;
    }

    &__years {
      padding: 8px 24px;
      background: ${(props) => props.theme.colors.primary};
      border-radius: 12px;
      text-align: center;
    }

    &__button {
      padding: 16px 32px;
      margin-top: 26px;
      border-radius: 12px;
      background-color: ${(props) => props.theme.colors.secondary};
      color: ${(props) => props.theme.colors.primary};
      max-width: 400px;
      width: 100%;
    }
  }
`;

export default AnimalDetailPageStyled;
