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
      justify-content: space-between;
    }
  }

  .update-button {
    display: flex;
    align-items: center;
    background: ${(props) => props.theme.colors.quatenary};
    border-radius: 12px;
    padding: 12px;
    margin-top: 10px;
  }

  .delete-button {
    display: flex;
    align-items: center;
    background: ${(props) => props.theme.colors.quinary};
    border-radius: 12px;
    padding: 12px;
    margin-top: 10px;
  }
`;

export default AnimalCardStyled;
