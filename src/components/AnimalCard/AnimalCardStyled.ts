import styled from "styled-components";

const AnimalCardStyled = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: solid;
  border-color: ${(props) => props.theme.colors.secondaryBackground};
  border-width: 1px;
  border-radius: 8px;
  background-color: ${(props) => props.theme.colors.primary};

  .animal-card {
    &__image {
      border-radius: 8px 8px 0 0;
      object-fit: cover;
    }

    &__information {
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 22px;
      gap: 8px;
    }

    &__information > h2 {
      font-size: 26px;
    }

    &__characteristics {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }

    &__characteristics > span {
      font-size: 20px;
    }

    &__buttons {
      display: flex;
      flex-direction: column;
      gap: 12px;
      margin-top: 10px;
    }
  }

  .update-button {
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${(props) => props.theme.colors.primary};
    border-radius: 12px;
    padding: 12px;
    border: solid;
    border-color: ${(props) => props.theme.colors.secondary};
    color: ${(props) => props.theme.colors.secondary};
  }

  .delete-button {
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${(props) => props.theme.colors.quinary};
    border-radius: 12px;
    padding: 12px;
    color: ${(props) => props.theme.colors.primary};
  }
`;

export default AnimalCardStyled;
