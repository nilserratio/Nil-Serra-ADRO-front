import styled from "styled-components";

const AnimalsPageStyled = styled.main`
  background-color: ${(props) => props.theme.colors.secondaryBackground};
  padding: 32px 22px;
  height: 100vh;

  .animals-container {
    &__title {
      font-weight: 600;
      font-size: 2rem;
      line-height: 48px;
      margin: 20px 0;
    }
  }
`;

export default AnimalsPageStyled;
