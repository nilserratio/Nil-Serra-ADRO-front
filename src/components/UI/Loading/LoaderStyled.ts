import styled from "styled-components";

const LoaderStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: ${(props) => props.theme.colors.secondaryBackground}d9;
  min-width: 320px;
  z-index: 1;

  .loader-container {
    &__loader {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 20px;
      padding: 20px;
      width: 60vw;
      height: 200px;
      background-color: ${(props) => props.theme.colors.primary};
      border-radius: 10px;
      min-width: 200px;
      max-width: 400px;
    }
  }
`;

export default LoaderStyled;
