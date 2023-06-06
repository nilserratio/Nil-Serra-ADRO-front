import styled from "styled-components";

const FeedbackStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: ${(props) => props.theme.colors.secondaryBackground}d9;
  min-width: 320px;

  .modal-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    gap: 20px;
    padding: 20px;
    width: 60vw;
    background-color: ${(props) => props.theme.colors.primary};
    border-radius: 10px;
    min-width: 200px;
    max-width: 400px;

    &__title {
      color: ${(props) => props.theme.colors.succeed};
      font-size: 1.25rem;
      font-weight: bold;

      &--error {
        color: ${(props) => props.theme.colors.error};
      }
    }

    &__button {
      padding: 16px 32px;
      margin-top: 10px;
      border-radius: 12px;
      background-color: ${(props) => props.theme.colors.succeed};
      color: ${(props) => props.theme.colors.primary};
      max-width: 400px;
      width: 100%;

      &--error {
        background-color: ${(props) => props.theme.colors.error};
      }
    }
  }
`;

export default FeedbackStyled;
