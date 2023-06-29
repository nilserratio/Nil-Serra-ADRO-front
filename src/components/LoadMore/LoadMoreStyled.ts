import styled from "styled-components";

const LoadMoreStyled = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  width: 100%;
  max-width: 276px;
  margin-top: 10px;

  .load-more {
    &__button {
      padding: 8px 24px;
      width: 100%;
      max-width: 276px;
      border: solid;
      border-color: ${(props) => props.theme.colors.secondaryBackground};
      border-width: 1px;
      border-radius: 12px;
      background: ${(props) => props.theme.colors.primary};
      letter-spacing: 1.5px;
    }

    &__progress-bar {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 12px;
      width: 100%;
      max-width: 276px;
    }

    &__progress-bar > label {
      font-size: 0.75rem;
      color: ${(props) => props.theme.colors.secondary};
    }

    &__progress-bar > progress {
      height: 0.125rem;
      width: 90%;
    }

    &__progress-bar > progress::-webkit-progress-bar {
      background-color: ${(props) => props.theme.colors.secondaryBackground};
    }

    &__progress-bar > progress::-webkit-progress-value {
      background-color: ${(props) => props.theme.colors.secondary};
    }
  }
`;

export default LoadMoreStyled;
