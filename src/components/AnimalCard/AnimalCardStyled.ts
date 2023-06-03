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
      gap: 16px;
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
  }
`;

export default AnimalCardStyled;
