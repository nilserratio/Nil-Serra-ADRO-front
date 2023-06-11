import styled from "styled-components";

const AnimalFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  padding: 32px 0;
  align-items: center;

  .animalForm-container {
    &__control {
      display: flex;
      flex-direction: column;
      padding-bottom: 26px;
      gap: 10px;
      max-width: 400px;
      width: 100%;
    }

    &__control > input {
      padding: 16px;
      border-radius: 12px;
      background-color: ${(props) => props.theme.colors.primary};
    }

    &__control > select {
      padding: 16px;
      border-radius: 12px;
      background-color: ${(props) => props.theme.colors.primary};
      appearance: none;
      -moz-appearance: none;
      background-image: url(/images/icons/select-down.svg);
      background-repeat: no-repeat;
      background-position-x: 95%;
      background-position-y: 10px;

      &:hover,
      :focus {
        background-image: url(/images/icons/select-up.svg);
      }
    }

    &__control > textarea {
      padding: 16px;
      border-radius: 12px;
      height: 250px;
      background-color: ${(props) => props.theme.colors.primary};
    }

    &__submit {
      padding: 16px 32px;
      margin-top: 10px;
      border-radius: 12px;
      background-color: ${(props) => props.theme.colors.secondary};
      color: ${(props) => props.theme.colors.primary};
      max-width: 400px;
      width: 100%;

      :disabled {
        color: ${(props) => props.theme.colors.secondary};
        background-color: transparent;
        border: 3px solid;
        font-weight: bold;
      }
    }
  }
`;

export default AnimalFormStyled;
